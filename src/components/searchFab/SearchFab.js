
import React, { Component }     from 'react';
import { connect }              from 'react-redux';
import { searchModalOpen, searchModalClose, updateSearchValue, pageNav } from'../../Reducers';
import {withRouter} from 'react-router-dom';
import { Fab, Dialog, DialogTitle, DialogContent, TextField, List, ListItem, ListItemAvatar, ListItemText, Avatar } from '@material-ui/core'
import './fab.scss'



 class SearchFab extends Component{ 
    constructor(props){
        super(props);
        this.state={
         };

         this.openSearch = this.openSearch.bind(this)
         this.closeSearch = this.closeSearch.bind(this)
         this.handleSearchChange = this.handleSearchChange.bind(this)
         this.pageNavigate = this.pageNavigate.bind(this)
        
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

    pageNavigate(info) {
        console.log(info)
        // Directs to correct page based upon selected item
        this.props.pageNav(info)
    }

    render() {
        const { isOpen, searchValue, searchBarResults } = this.props

        // eslint-disable-next-line
         const searchMedia = searchBarResults.map((results) => {

            switch(results.media_type){
                case 'movie':
                   return( <ListItem key={results.id} button onClick={() => {this.pageNavigate(results)} } >
                        <ListItemAvatar>
                            <Avatar>
                                <i className="material-icons movieIcon ">movie</i>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={results.title} secondary={results.release_date} />
                    </ListItem>
                   )
                case 'tv':
                    return(<ListItem key={results.id}  button onClick={() => {this.pageNavigate(results)} } >
                        <ListItemAvatar>
                            <Avatar>
                                <i className="material-icons tvIcon ">tv</i>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={results.name} secondary={results.first_air_date} />
                    </ListItem>)

                case 'person':
                   return(<ListItem key={results.id} button onClick={() => {this.pageNavigate(results)} } >
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
                                <DialogTitle className='searchInput'>
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
                                </DialogTitle>
                                <DialogContent>
                                    <List className='listHeight'>
                                        {searchMedia}   
                                    </List>
                                </DialogContent>
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
        updateSearchValue:(data) => dispatch( updateSearchValue(data)),
        pageNav:(data) => dispatch( pageNav(data)),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps )(SearchFab))