import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';

import { ThemeContext } from '../../contexts/ThemeContext';

import expImgWhite from '../../assets/svg/experience/expImgWhite.svg'
import expImgBlack from '../../assets/svg/experience/expImgBlack.svg'

import './Experience.css'
import { Description } from '@material-ui/icons';

function ExperienceCard({id, company, jobtitle, startYear, endYear,desc}) {

    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        experienceCard : {
            backgroundColor:theme.primary30,
            "&:hover": {
                backgroundColor:theme.primary50,
            },
            minHeight: '300px',
            display: 'flex',
            flexDirection: 'column',
            // Adjust padding as needed
            padding: '20px',
        },
    }));
    console.log(id, jobtitle,desc,"hello")

    const classes = useStyles();


    return (
        <Fade bottom>
            <div key={id} className={`experience-card ${classes.experienceCard}`}>
                <div className="expcard-img" style={{backgroundColor: theme.primary}}>
                    <img src={theme.type === 'light' ? expImgWhite : expImgBlack} alt="" />
                </div>
                <div className="experience-details">
                    <h6 style={{color: theme.tertiary80}}>{startYear}-{endYear}</h6>
                    <h4 style={{color: theme.tertiary}}>{jobtitle}</h4>
                    <h5 style={{color: theme.tertiary80}}>{company}</h5>
                    <p style={{color: theme.tertiary80}}>{desc}</p>
                    

                </div>
            </div>
        </Fade>   
    )
}

export default ExperienceCard
