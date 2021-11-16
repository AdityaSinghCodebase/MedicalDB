import React, { useContext, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Box, IconButton, Typography } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { Formik } from "formik";
import { makeStyles } from "@material-ui/core";
import * as yup from "yup";
import { TabletList } from "../APIS/TabletList";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2rem",
  },
  //   root: {
  //     "& > *": {
  //       margin: theme.spacing(1),
  //       width: "25ch",
  //     },
  //   },

  //   form: {
  //     height: "500px",
  //     width: "300px",
  //     marginLeft: "auto",
  //     marginRight: "auto",
  //     backgroundColor: "white",
  //     position: "absolute",
  //     transform: "translate(-50%,-50%)",
  //     top: "50%",
  //     left: "50%",
  //     borderRadius: "10px",
  //     backdropFilter: "blur(10px)",
  //     border: "2px solid rgba(255,255,255,0.1)",
  //     boxShadow: "0 0 40px rgba(8,7,16,0.6)",
  //     padding: "50px 35px",
  //   },
  //   "form *": {
  //     fontFamily: "'Poppins',sans-serif",
  //     color: "#ffffff",
  //     letterSpacing: "0.5px",
  //     outline: "none",
  //     border: "none",
  //   },
  //   "form h3": {
  //     fontSize: "32px",
  //     fontWeight: 500,
  //     lineHeight: "42px",
  //     textAlign: "center",
  //   },
  //   label: {
  //     display: "block",
  //     marginTop: "10px",
  //     fontSize: "16px",
  //     fontWeight: 500,
  //   },
  //   input: {
  //     display: "block",
  //     height: "50px",
  //     width: "100%",
  //     backgroundColor: "rgba(255,255,255,0.07)",
  //     borderRadius: "3px",
  //     padding: "0 10px",
  //     marginTop: "8px",
  //     fontSize: "14px",
  //     fontWeight: 300,
  //   },

  //   button: {
  //     marginTop: "50px",
  //     width: "100%",
  //     backgroundColor: "#ffffff",
  //     color: "#080710",
  //     padding: "15px 0",
  //     fontSize: "18px",
  //     fontWeight: 600,
  //     borderRadius: "5px",
  //     cursor: "pointer",
  //   },
  formBody: {
    display: "flex",
    flexDirection: "column",
    rowGap: "1rem",
    minWidth: 300,
  },
}));

const initialValues = {
  name: "",
  price: "",
  stock: "",
  gst: "",
  cgst: "",
};

const validationSchema = yup.object({
  name: yup.string().required().label("Product Name"),
  price: yup
    .number()
    .typeError("Value should be a number.")
    .required()
    .label("Product Price"),
  stock: yup
    .number()
    .typeError("Value should be a number.")
    .required()
    .label("Product Stock"),
  gst: yup
    .number()
    .typeError("Value should be a number.")
    .required()
    .label("Product GST"),
  cgst: yup
    .number()
    .typeError("Value should be a number.")
    .required()
    .label("Product CGST"),
});

export default function AddProduct() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [tablet, setTablet] = useContext(TabletList);

  const handleDialogOpen = (bool) => () => {
    setOpen(bool);
  };

  const handleSubmit = (values) => {
    console.log(values);
    setTablet([...tablet, values]);
  };

  return (
    <div>
      <IconButton
        edge="end"
        color="inherit"
        aria-label="menu"
        onClick={handleDialogOpen(true)}
      >
        <AddCircleIcon />
      </IconButton>
      <Dialog open={open} onClose={handleDialogOpen(false)}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <Box component={"form"} className={classes.root}>
              <Typography color="inherit" variant="h4" align="center">
                Add New Product
              </Typography>

              <div className={classes.formBody}>
                <TextField
                  fullWidth
                  variant="outlined"
                  id="name"
                  name={"name"}
                  placeholder="Name of Product"
                  value={values.name}
                  error={Boolean(touched.name && errors.name)}
                  helperText={touched.name && errors.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <TextField
                  fullWidth
                  variant="outlined"
                  id="price"
                  name={"price"}
                  placeholder="Price"
                  value={values.price}
                  error={Boolean(touched.price && errors.price)}
                  helperText={touched.price && errors.price}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <TextField
                  fullWidth
                  variant="outlined"
                  id="stock"
                  name={"stock"}
                  placeholder="Stock"
                  value={values.stock}
                  error={Boolean(touched.stock && errors.stock)}
                  helperText={touched.stock && errors.stock}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <TextField
                  fullWidth
                  variant="outlined"
                  id="gst"
                  name={"gst"}
                  placeholder="GST"
                  value={values.gst}
                  error={Boolean(touched.gst && errors.gst)}
                  helperText={touched.gst && errors.gst}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <TextField
                  fullWidth
                  variant="outlined"
                  id="cgst"
                  name={"cgst"}
                  placeholder="CGST"
                  value={values.cgst}
                  error={Boolean(touched.cgst && errors.cgst)}
                  helperText={touched.cgst && errors.cgst}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <Button
                  color="primary"
                  type="submit"
                  onClick={handleSubmit}
                  variant="contained"
                >
                  Add Record
                </Button>
              </div>
            </Box>
          )}
        </Formik>
      </Dialog>
    </div>
  );
}
