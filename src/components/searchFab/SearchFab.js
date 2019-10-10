
import React, { Component }     from 'react';
import { connect }              from 'react-redux';
import { searchModalOpen, searchModalClose, updateSearchValue } from'../../Reducers';
import {withRouter} from 'react-router-dom';
import { Fab, Dialog, DialogContent, TextField, List, ListItem, ListItemAvatar, ListItemText, Avatar } from '@material-ui/core'
import './fab.scss'



 class SearchFab extends Component{ 
    constructor(props){
        super(props);
        this.state={
         };

         this.openSearch = this.openSearch.bind(this)
         this.closeSearch = this.closeSearch.bind(this)
         this.handleSearchChange = this.handleSearchChange.bind(this)
        
    }

    openSearch() {
        this.props.searchModalOpen()
    }

    closeSearch() {
        this.props.searchModalClose()
    }

    handleSearchChange(e) { 
        this.props.updateSearchValue( e.target.value )

    }

    render() {
        const { isOpen, searchValue, searchBarResults, hey } = this.props
        console.log(searchValue)
        console.log(searchBarResults)
        console.log(isOpen)
        console.log(hey)

         const searchMedia = searchBarResults.map((results) => {

            switch(results.media_type){
                case 'movie':
                   return( <ListItem key={results.id} >
                        <ListItemAvatar>
                            <Avatar>
                                <i className="material-icons movieIcon ">movie</i>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={results.title} secondary={results.release_date} />
                    </ListItem>
                   )
                case 'tv':
                    return(<ListItem key={results.id} >
                        <ListItemAvatar>
                            <Avatar>
                                <i className="material-icons tvIcon ">tv</i>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={results.name} secondary={results.first_air_date} />
                    </ListItem>)

                case 'person':
                   return(<ListItem key={results.id}>
                        <ListItemAvatar>
                            <Avatar>
                                <i className="material-icons personIcon ">person</i>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={results.name} />
                    </ListItem>)

                default:
                break;
            }
        })

        const searchBar =    <Dialog 
                                open={isOpen} 
                                onClose={ () => { this.closeSearch() } } 
                                aria-labelledby="form-dialog-title"
                                >
                                <DialogContent>
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="title"
                                    label="Search for some media"
                                    type="text"
                                    onChange={ this.handleSearchChange }
                                    value={searchValue}
                                    fullWidth
                                />
                                {/* Add some media for autocomplete form use searchBarResults */}
                                </DialogContent>
                                <List >
                                    {searchMedia}   
                                </List>
                            </Dialog>
                                    
    
        return(
            <div className = 'fabloc'>
               <Fab className='fab' onClick = { () => { this.openSearch() }}>
                <i className="material-icons">
                    search
                </i>
               </Fab>

                { searchBar }

            </div>

        );
    }
}
const mapStateToProps = state => {
    const isOpen = state.search_Model.isOpen;
    const searchValue = state.search_Model.searchValue;
    const searchBarResults = state.search_Model.searchBarResults;
    const hey = state.home.moviePopular

        return{ isOpen, searchValue, searchBarResults, hey };
}

const mapDispatchToProps = (dispatch) => {
    return{
        searchModalOpen:(data) => dispatch( searchModalOpen(data)),
        searchModalClose:(data) => dispatch( searchModalClose(data)),
        updateSearchValue:(data) => dispatch( updateSearchValue(data))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps )(SearchFab))