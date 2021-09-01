import React from "react";
import { createPortal } from "react-dom";
import { Modal, makeStyles, Backdrop, Fade } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import * as Actions from "../redux/actions";
import { useRef } from "react";

const useStyles = makeStyles((theme) => ({
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 2, 2, 2),
        borderRadius: 5,
    },
}));

function ModalComponent({ children }) {
    const ref = useRef(null);
    const classes = useStyles();
    const dispatch = useDispatch();
    const { open } = useSelector((state) => state.characters);

    const handleClose = () => {
        dispatch(Actions.changeModalState(false));
    };

    return open
        ? createPortal(
              <Modal
                  ref={ref}
                  aria-labelledby="transition-modal-title"
                  aria-describedby="transition-modal-description"
                  className={classes.modal}
                  open={open}
                  onClose={handleClose}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                      timeout: 500,
                  }}
              >
                  <Fade in={open}>
                      <div className={classes.paper}>{children}</div>
                  </Fade>
              </Modal>,
              document.getElementById("modal")
          )
        : null;
}

export default ModalComponent;
