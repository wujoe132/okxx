const style = {
    navbar: {
        width: "100%",
        height: "60px",
        backgroundColor: "red",
        position: "fixed",
        // zIndex: "1"
        display: "flex",
        justifyContent: "space-between"
    },
    searchSection: {
        display: "flex",
        justifyContent: "space-between",
    },
    input: {
        backgroundColor: "inherit",
        border: "none",
        borderBottom: "1px solid black",
        width: "400px",
        color: "white",
        outline: "none",
        fontSize: "20px",
        marginRight: "20px",
        paddingTop: "15px"
    },
    logo: {
        color: "white",
        marginLeft: "30px",
        marginTop: "10px",
        marginBottom: "30px",
        textDeoration: "none",
    },
    i: {
        paddingTop: "10px",
        fontSize: "25px",
        postion: "fixed",
        "&:hover": {
            color: "#ff0000",
            cursor: "pointer"
        }
    },
    seci: {
        display: "flex",
        fontSize: "25px",
        textAlign: "right",
        marginRight: "30px",
        // marginRight: "auto",
        marginTop: "15px",
        marginBottom: "30px",
        // position: "fixed"
    },
    profile: {
        display: "block",
        textDeoration: "none",
        position: "relative",
        zIndex: "1",
        width: "30px",
        color: "yellow"
    },
    list: {
        width: "30px",
        textDeoration: "none"
    }

}

export default style;