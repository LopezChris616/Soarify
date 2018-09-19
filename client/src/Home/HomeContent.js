import React from "react";
import Slide from 'react-reveal/Zoom';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    card: {
        width: 875,
        margin: 20,
        boxShadow: "none"
    },
    cardTitle: {
        fontSize: "30px",
        textDecoration: "underline"
    },
    cardContent: {
        fontSize: "18px",
        marginBottom: "10px"
    }
  });

const HomeContent = props => {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <Grid container justify="center">
                <Card className={classes.card}>
                    <Grid container>
                        <Grid item xs={12} sm={8} md={6}>
                            <CardMedia
                            component="img"
                            image={props.image}
                            title={props.alt}
                            />
                        </Grid>
                        <Grid item xs={12} sm={8} md={6}>
                            <CardContent>
                                <Typography gutterBottom variant="headline" component="h2" className={classes.cardTitle}>
                                    {props.title}
                                </Typography>
                                <Typography component="p" className={classes.cardContent}>
                                    {props.info1}
                                </Typography>
                                <Typography component="p" className={classes.cardContent}>
                                    {props.info2}
                                </Typography>
                            </CardContent>
                        </Grid>
                    </Grid>
                </Card>
            </Grid>
        </div>
    )
}

  export default withStyles(styles)(HomeContent);