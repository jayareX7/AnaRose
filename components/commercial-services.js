import React, {Component} from 'react';
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
// @material-ui/icons

import Close from "@material-ui/icons/Close"

// core components
import Button from '../components//modal-button.js';

import modalStyle from '../components/modal-style'
import Sectitle from './Title/Sectitle';



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function Modal() {
  const [modal, setModal] = React.useState(false);
  const classes = withStyles();



        return(

          
            <section className="support_integration_area">
                <div className="container">
                <Sectitle sClass="sec_title text-center mb_70" Title='Our Services' TitleP='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa sed elementum tempus egestas sed.'/>
                    <div className="row flex-row-reverse">
                    <div className="col-lg-9 col-md-10 col-sm-12">
                            <div className="row">
                                
                                <Button style={{width: 33 + '%', display: 'inline-block'}} color="transparent" round onClick={() => setModal(true)}>
                                    <div className="col-lg-4 col-md-4 col-sm-6">
                                        <a href="#" className="s_integration_item">
                                            <img src="assets/new-home/kissmetrics.png" style={{margin: '0 auto'}} alt=""/>
                                            <h5>Service #1</h5>
                                        </a>
                                    </div>
                                </Button>
                                <Dialog
                                    classes={{root: classes.center, paper: classes.modal}}
                                    open={modal}
                                    TransitionComponent={Transition}
                                    keepMounted
                                    onClose={() => setModal(false)}
                                    aria-labelledby="modal-slide-title"
                                    aria-describedby="modal-slide-description">
                                <DialogTitle
                                    id="classic-modal-slide-title"
                                    disableTypography
                                    className={classes.modalHeader}>
                                <IconButton
                                    className={classes.modalCloseButton}
                                    key="close"
                                    aria-label="Close"
                                    color="inherit"
                                    onClick={() => setModal(false)}>
                                <Close className={classes.modalClose} />
                                </IconButton>
                                    <h4 className={classes.modalTitle}>Modal title</h4>
                                </DialogTitle>
                                <DialogContent
                                    id="modal-slide-description"
                                    className={classes.modalBody}>
                                    <h5>Are you sure you want to do this?</h5>
                                </DialogContent>
                                <DialogActions
                                    className={classes.modalFooter + " " + classes.modalFooterCenter}>
                                <Button onClick={() => setModal(false)}>Never Mind</Button>
                                <Button onClick={() => setModal(false)} color="success">
                                    Yes
                                </Button>
                                </DialogActions>
                                </Dialog>
                               
                            
                                <Button style={{width: 33 + '%', display: 'inline-block'}} color="transparent" round onClick={() => setModal(true)}>
                                    <div className="col-lg-4 col-md-4 col-sm-6">
                                        <a href="#" className="s_integration_item">
                                            <img src="assets/new-home/kissmetrics.png" style={{margin: '0 auto'}} alt=""/>
                                            <h5>Service #2</h5>
                                        </a>
                                    </div>
                                </Button>
                                <Dialog
                                    classes={{root: classes.center, paper: classes.modal}}
                                    open={modal}
                                    TransitionComponent={Transition}
                                    keepMounted
                                    onClose={() => setModal(false)}
                                    aria-labelledby="modal-slide-title"
                                    aria-describedby="modal-slide-description">
                                <DialogTitle
                                    id="classic-modal-slide-title"
                                    disableTypography
                                    className={classes.modalHeader}>
                                <IconButton
                                    className={classes.modalCloseButton}
                                    key="close"
                                    aria-label="Close"
                                    color="inherit"
                                    onClick={() => setModal(false)}>
                                <Close className={classes.modalClose} />
                                </IconButton>
                                    <h4 className={classes.modalTitle}>Modal title</h4>
                                </DialogTitle>
                                <DialogContent
                                    id="modal-slide-description"
                                    className={classes.modalBody}>
                                    <h5>Are you sure you want to do this?</h5>
                                </DialogContent>
                                <DialogActions
                                    className={classes.modalFooter + " " + classes.modalFooterCenter}>
                                <Button onClick={() => setModal(false)}>Never Mind</Button>
                                <Button onClick={() => setModal(false)} color="success">
                                    Yes
                                </Button>
                                </DialogActions>
                                </Dialog>


                                <Button style={{width: 33 + '%', display: 'inline-block'}} color="transparent" round onClick={() => setModal(true)}>
                                    <div className="col-lg-4 col-md-4 col-sm-6">
                                        <a href="#" className="s_integration_item">
                                            <img src="assets/new-home/kissmetrics.png" style={{margin: '0 auto'}} alt=""/>
                                            <h5>Service #3</h5>
                                        </a>
                                    </div>
                                </Button>
                                <Dialog
                                    classes={{root: classes.center, paper: classes.modal}}
                                    open={modal}
                                    TransitionComponent={Transition}
                                    keepMounted
                                    onClose={() => setModal(false)}
                                    aria-labelledby="modal-slide-title"
                                    aria-describedby="modal-slide-description">
                                <DialogTitle
                                    id="classic-modal-slide-title"
                                    disableTypography
                                    className={classes.modalHeader}>
                                <IconButton
                                    className={classes.modalCloseButton}
                                    key="close"
                                    aria-label="Close"
                                    color="inherit"
                                    onClick={() => setModal(false)}>
                                <Close className={classes.modalClose} />
                                </IconButton>
                                    <h4 className={classes.modalTitle}>Modal title</h4>
                                </DialogTitle>
                                <DialogContent
                                    id="modal-slide-description"
                                    className={classes.modalBody}>
                                    <h5>Are you sure you want to do this?</h5>
                                </DialogContent>
                                <DialogActions
                                    className={classes.modalFooter + " " + classes.modalFooterCenter}>
                                <Button onClick={() => setModal(false)}>Never Mind</Button>
                                <Button onClick={() => setModal(false)} color="success">
                                    Yes
                                </Button>
                                </DialogActions>
                                </Dialog>


                                <Button style={{width: 33 + '%', display: 'inline-block'}} color="transparent" round onClick={() => setModal(true)}>
                                    <div className="col-lg-4 col-md-4 col-sm-6">
                                        <a href="#" className="s_integration_item">
                                            <img src="assets/new-home/kissmetrics.png" style={{margin: '0 auto'}} alt=""/>
                                            <h5>Service #4</h5>
                                        </a>
                                    </div>
                                </Button>
                                <Dialog
                                    classes={{root: classes.center, paper: classes.modal}}
                                    open={modal}
                                    TransitionComponent={Transition}
                                    keepMounted
                                    onClose={() => setModal(false)}
                                    aria-labelledby="modal-slide-title"
                                    aria-describedby="modal-slide-description">
                                <DialogTitle
                                    id="classic-modal-slide-title"
                                    disableTypography
                                    className={classes.modalHeader}>
                                <IconButton
                                    className={classes.modalCloseButton}
                                    key="close"
                                    aria-label="Close"
                                    color="inherit"
                                    onClick={() => setModal(false)}>
                                <Close className={classes.modalClose} />
                                </IconButton>
                                    <h4 className={classes.modalTitle}>Modal title</h4>
                                </DialogTitle>
                                <DialogContent
                                    id="modal-slide-description"
                                    className={classes.modalBody}>
                                    <h5>Are you sure you want to do this?</h5>
                                </DialogContent>
                                <DialogActions
                                    className={classes.modalFooter + " " + classes.modalFooterCenter}>
                                <Button onClick={() => setModal(false)}>Never Mind</Button>
                                <Button onClick={() => setModal(false)} color="success">
                                    Yes
                                </Button>
                                </DialogActions>
                                </Dialog>


                                <Button style={{width: 33 + '%', display: 'inline-block'}} color="transparent" round onClick={() => setModal(true)}>
                                    <div className="col-lg-4 col-md-4 col-sm-6">
                                        <a href="#" className="s_integration_item">
                                            <img src="assets/new-home/kissmetrics.png" style={{margin: '0 auto'}} alt=""/>
                                            <h5>Service #5</h5>
                                        </a>
                                    </div>
                                </Button>
                                <Dialog
                                    classes={{root: classes.center, paper: classes.modal}}
                                    open={modal}
                                    TransitionComponent={Transition}
                                    keepMounted
                                    onClose={() => setModal(false)}
                                    aria-labelledby="modal-slide-title"
                                    aria-describedby="modal-slide-description">
                                <DialogTitle
                                    id="classic-modal-slide-title"
                                    disableTypography
                                    className={classes.modalHeader}>
                                <IconButton
                                    className={classes.modalCloseButton}
                                    key="close"
                                    aria-label="Close"
                                    color="inherit"
                                    onClick={() => setModal(false)}>
                                <Close className={classes.modalClose} />
                                </IconButton>
                                    <h4 className={classes.modalTitle}>Modal title</h4>
                                </DialogTitle>
                                <DialogContent
                                    id="modal-slide-description"
                                    className={classes.modalBody}>
                                    <h5>Are you sure you want to do this?</h5>
                                </DialogContent>
                                <DialogActions
                                    className={classes.modalFooter + " " + classes.modalFooterCenter}>
                                <Button onClick={() => setModal(false)}>Never Mind</Button>
                                <Button onClick={() => setModal(false)} color="success">
                                    Yes
                                </Button>
                                </DialogActions>
                                </Dialog>


                                <Button style={{width: 33 + '%', display: 'inline-block'}} round color="transparent" onClick={() => setModal(true)}>
                                    <div className="col-lg-4 col-md-4 col-sm-6">
                                        <a href="#" className="s_integration_item">
                                            <img src="assets/new-home/kissmetrics.png" style={{margin: '0 auto'}} alt=""/>
                                            <h5>Service #6</h5>
                                        </a>
                                    </div>
                                </Button>
                                <Dialog
                                    classes={{root: classes.center, paper: classes.modal}}
                                    open={modal}
                                    TransitionComponent={Transition}
                                    keepMounted
                                    onClose={() => setModal(false)}
                                    aria-labelledby="modal-slide-title"
                                    aria-describedby="modal-slide-description">
                                <DialogTitle
                                    id="classic-modal-slide-title"
                                    disableTypography
                                    className={classes.modalHeader}>
                                <IconButton
                                    className={classes.modalCloseButton}
                                    key="close"
                                    aria-label="Close"
                                    color="inherit"
                                    onClick={() => setModal(false)}>
                                <Close className={classes.modalClose} />
                                </IconButton>
                                    <h4 className={classes.modalTitle}>Modal title</h4>
                                </DialogTitle>
                                <DialogContent
                                    id="modal-slide-description"
                                    className={classes.modalBody}>
                                    <h5>Are you sure you want to do this?</h5>
                                </DialogContent>
                                <DialogActions
                                    className={classes.modalFooter + " " + classes.modalFooterCenter}>
                                <Button onClick={() => setModal(false)}>Never Mind</Button>
                                <Button onClick={() => setModal(false)} color="success">
                                    Yes
                                </Button>
                                </DialogActions>
                                </Dialog>
                               
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-2 col-sm-12">
                            <img className="integration_img" src="assets/new-home/tree.png" alt=""/>
                        </div>
                    </div>
                </div>
        
            </section>
  
        ) 
}





