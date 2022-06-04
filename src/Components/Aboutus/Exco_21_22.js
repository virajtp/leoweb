import { Grid, CircularProgress } from '@material-ui/core';
import React, { Component } from 'react';
import SocialMediaIcons from './socialMedia';

class Exco21_22 extends Component {
    render() {
        return (
            !this.props.data ? <CircularProgress /> : (
                <div className="exco">
                    <h1 style={{ fontSize: '45px' }}>Executive Board 2021/22</h1>
                    <Grid container justify="center" alignItems="center" spacing={2}>
                        {/* {this.props.data.exco.map((excos) => ( */}
                        {this.props.data.exco.map((excos) => (
                            <Grid key={excos.id} item xs={12} sm={8} md={4}>
                                <h2>{excos.title}</h2>
                                <img src={excos.photo} width="240px" />
                                <h3>Leo {excos.Name}</h3>
                                <SocialMediaIcons fb={excos.fb} linkedIn={excos.linkedin} />
                            </Grid>
                        ))}
                    </Grid>
                </div>
            )
        );
    }
}

export default Exco21_22;