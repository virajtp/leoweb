
import { Grid, CircularProgress } from '@material-ui/core';
import React, { Component } from 'react';
import SocialMediaIcons from './socialMedia';

class Dir21_22 extends Component {
    render() {
        return (
            !this.props.data ? <CircularProgress /> : (
                <div className="exco">
                    <h1 style={{ fontSize: '45px' }}>Board of Directors 2021/22</h1>
                    <Grid container justify="center" alignItems="center" spacing={2}>
                        {this.props.data.dirrect.map((director) => (
                            <Grid key={director.id} item xs={3} sm={4} md={4}>
                                <img src={director.photo} width="240px" height="150px" />
                                <h3>Leo {director.Name}</h3>
                                <h4>Director of {director.section}</h4>
                                <SocialMediaIcons fb={director.fb} linkedIn={director.linkedin} />
                            </Grid>
                        ))}
                    </Grid>
                </div>
            )
        );
    }
}

export default Dir21_22;