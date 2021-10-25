import React, { useContext } from "react";

import { makeStyles } from "@material-ui/styles";
import { TabletList } from "../APIS/TabletList";

const useStyles = makeStyles((theme) => ({
  card: {
    position: "relative",
    marginTop: 10,
    marginRight: "auto",
    marginLeft: "auto",
    padding: 10,
    flexDirection: "column",
    height: "300px",
    width: "300px",
    borderRadius: "25px",
    backgroundColor: "#ffffff",
    boxShadow: "2px 0 30px rgba(0, 0, 0, 0.3)",
    overflow: "hidden",
  },
  ".card:nth-child(1)": { marginRight: "50px" },
  content: {
    position: "absolute",
    right: "0",
    bottom: "0",
    margin: "20px",
    cursor: "pointer",
    backgroundColor: "#000000",
    color: "#ffffff",
    fontSize: "14px",
    padding: "6px 15px",
    borderRadius: "30px",
    boxShadow: "10px 0 50px rgba(0, 0, 0, 0.1)",
  },
  h2: {
    position: "absolute",
    top: 50,
    fontSize: "1.2rem",
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "15px",
    color: "#fff",
    mixBlendMode: "difference",
  },

  p2: {
    fontSize: "16px",
    color: "#ffffff",
    mixBlendMode: "difference",
  },
  p3: {
    fontSize: "16px",
    color: "#ffffff",
    mixBlendMode: "difference",
  },
  "#circle": {
    height: "100%",
    width: "100%",
    borderRadius: "50%",
    backgroundColor: "#000000",
    marginTop: "-150px",
    marginLeft: "150px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(300px, 1fr))",
    gridGap: 5,
  },
}));

function Card() {
  const classes = useStyles();
  const [tablet, setTablet] = useContext(TabletList);

  // const removeProd = e => {
  //   setTablet(e.target.value)
  // }
  return (
    <>
      {" "}
      <div className={classes.grid}>
        {tablet.map((tablet) => (
          <>
            <div key={tablet.id} className={classes.card}>
              <h2 className={classes.h2}>{tablet.name}</h2>
              <div className={classes["#circle"]} id="circle" />

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "50% 50%",
                  marginLeft: "auto",
                  marginRight: "auto",
                  placeContent: "center",
                }}
              >
                <p className={classes.p2}>Price: {tablet.price}</p>
                <p className={classes.p3}>Stock: {tablet.stock}</p>
                <p className={classes.p2}>Price: {tablet.price}</p>
                <p className={classes.p3}>Stock: {tablet.stock}</p>
                <p className={classes.p2}>Price: {tablet.price}</p>
                <p className={classes.p3}>Stock: {tablet.stock}</p>
              </div>

              <div className={classes.content}>
                <i>Delete</i>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default Card;
