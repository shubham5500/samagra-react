import React, {Component} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Aux from "../../Components/Aux/Aux";
import {Body} from "./Body/Body";
import Typography from "@material-ui/core/Typography";
import {GenericTable} from "../../Components/GenericTable/GenericTable";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

class Home extends Component {
    render() {
        return (
            <div>
                <BannerImage/>
                <Navbar/>
                <Body>
                    <Typography variant="h6" component="h3">
                        Explore all internal Samagra resources here
                    </Typography>
                    <EnsuringDeliveryTable/>
                    <DrivingGrowthTable/>
                    <NurturingTalentTable/>
                    <FacilitatingOperationsTable/>
                </Body>
            </div>
        )
    }
}

export default Home;


const BannerImage = () => {
    return (
        <div className={'banner-image'}>
            <div className={'inner'}>
                <a className={'title'} href="http://159.89.162.37/" rel="home">Samagra | Transforming Governance</a>
                <div className="description">Welcome to your one stop shop for all Samagra Org Building Resources
                </div>
            </div>
        </div>
    )
};

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    toolbar: {},
    button: {
        margin: theme.spacing(1),
    },
    title: {
        // flexGrow: 1,
        marginRight: '2rem'
    },
}));


const Navbar = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Button color="inherit" className={classes.button}>
                        Primary
                    </Button>
                    <DropdownButton buttonClass={classes.button} buttonText={'Dashboard'}/>
                    <DropdownButton buttonClass={classes.button} buttonText={'Go To Form'}/>
                </Toolbar>
            </AppBar>
        </div>
    );
};


const DropdownButton = ({buttonText, buttonClass}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleClose() {
        setAnchorEl(null);
    }

    return (<Aux>
        <Button color="inherit" className={`${buttonClass}`} onClick={handleClick}>
            {buttonText}
        </Button>
        <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}>
            <MenuItem onClick={handleClose}>Menu Item</MenuItem>
            <MenuItem onClick={handleClose}>Menu Item</MenuItem>
            <MenuItem onClick={handleClose}>Menu Item</MenuItem>
        </Menu>
    </Aux>)
};


const EnsuringDeliveryTable = () => {
    const header = [{
        name: '#',
    }, {
        name: 'Topic',
    }, {
        name: 'Resource'
    }];

    const body = [{
        name: 'Samagra Quality Review Framework',
        subHeading: 'Process',
        link: 'https://docs.google.com/document/d/1CtteOYbzmbXQA-aXZ4TgqZQZM2-av4M9eleJiEVcE38/edit'
    }, {
        name: 'Samagra Team Processes',
        subHeading: '',
        link: 'https://drive.google.com/open?id=1WEb1wGrh3nNhnckSGXoXCILUjsPIZkRqTfEblNocH-I'
    }, {
        name: 'Team Pulse Form',
        subHeading: '',
        link: 'https://docs.google.com/forms/d/e/1FAIpQLScrmxPXPqhKiUT6Y_RA5J6G7WcWbs7IDknqAxsKa6qh_SMLiw/viewform'
    }, {
        name: '#SamagraWays and Values',
        subHeading: 'Guidelines & Checklists',
        link: 'https://drive.google.com/drive/u/0/folders/1gE2KiPhRVY0fZbMSTTw-Lu8rnbJ9vAhy?ogsrc=32'
    }, {
        name: 'Samagra Best Practices Checklists & Templates',
        subHeading: '',
        link: 'https://drive.google.com/open?id=1WmnpOdbR0nxFRaAcwfJH42pLFfTK45L3ZZ5wiJ06sUw'
    }, {
        name: 'Samagra Workstream Dashboard Checklist',
        subHeading: '',
        link: 'https://drive.google.com/drive/u/1/folders/16Y7ft2zUhmrYrGm0l8__ppjcivnMKXXq'
    }, {
        name: 'Manager\'s Checklist & Tracker',
        subHeading: '',
        link: 'https://drive.google.com/open?id=17QzfUjOO9cx1nhlV-ZtUJdWWoMcuDihAqCXd3Lg4G9Q'
    }, {
        name: 'Engagement Onboarding Checklist & Workplan',
        subHeading: '',
        link: 'https://drive.google.com/open?id=1DHtEwxhxABHwSngK1ukxjTDZM-cx_kMPDgzGJZ8jbcY'
    }];

    const headerView = <TableRow>{
        header.map((item, i) => {
            return (
                i === 0 ? <TableCell align="left">{item.name}</TableCell> :
                    <TableCell align="left">{item.name}</TableCell>
            )
        })} </TableRow>;

    const bodyView = (body.map((item, i) => {
        return <TableRow key={item.name} scope="item">
            <TableCell>1.{i + 1}</TableCell>
            <TableCell>{item.subHeading}</TableCell>
            <TableCell><a href={item.link} target={'_blank'}>{item.name}</a></TableCell>
        </TableRow>
    }));

    return (<Aux>
        <Typography variant="h6" component="h3" style={{marginTop: '15px'}}>
            1. Ensuring Delivery
        </Typography>
        <GenericTable headerArray={headerView} bodyArray={bodyView}/>
    </Aux>)
};


const DrivingGrowthTable = () => {
    const header = [{
        name: '#',
    }, {
        name: 'Topic',
    }, {
        name: 'Resources'
    }];

    const body = [{
        name: 'Associate Referral Policy',
        subHeading: 'Recruitment',
        link: 'https://docs.google.com/document/d/1WvgSOIfLfE3bNjqa13FbY-jl5w16NeWToo5sM_xB5wY/edit?usp=sharing'
    }, {
        name: 'Samagra Intership Provisional Plan',
        subHeading: '',
        link: 'https://docs.google.com/spreadsheets/d/1XLQzLq-_dGcEpHdl5aJd-yVlFFNinbQ99IRKLmZYptg/edit#gid=0'
    }, {
        name: 'Outreach Plan',
        subHeading: 'Outreach',
        link: 'https://drive.google.com/open?id=1YUe53P8AZXNR_LRzruDbwPbHklUYpvvF'
    },];

    const headerView = <TableRow>{
        header.map((item, i) => {
            return (
                i === 0 ? <TableCell align="left">{item.name}</TableCell> :
                    <TableCell align="left">{item.name}</TableCell>
            )
        })} </TableRow>;

    const bodyView = (body.map((item, i) => {
        return <TableRow key={item.name} scope="item">
            <TableCell>2.{i + 1}</TableCell>
            <TableCell>{item.subHeading}</TableCell>
            <TableCell><a href={item.link} target={'_blank'}>{item.name}</a></TableCell>
        </TableRow>
    }));

    return (<Aux>
        <Typography variant="h6" component="h3" style={{marginTop: '40px'}}>
            2. Driving Growth
        </Typography>
        <GenericTable headerArray={headerView} bodyArray={bodyView}/>
    </Aux>)
};


const NurturingTalentTable = () => {
    const header = [{
        name: '#',
    }, {
        name: 'Topic',
    }, {
        name: 'Resources'
    }];

    const body = [{
        name: 'Orientation Plan',
        subHeading: 'New Employees',
        link: 'https://docs.google.com/spreadsheets/d/1onohZxqyY1h1F_1_Kpkti121P94LP2SKPYfQPys4eH4/edit#gid=1163378847'
    }, {
        name: 'PD Framework & Tracker',
        subHeading: 'Current Employees',
        link: 'https://drive.google.com/open?id=1PwnJJmq2TEJpIJd1bEYI9zRe_PWktnujFp2mvXKaBws'
    }, {
        name: 'Performance Appraisal Metrics',
        subHeading: '',
        link: 'https://drive.google.com/open?id=1HcYyGy-2ohY4MQVqjkSsl_SKknMbbcXWBwDafZfWVJU'
    },];

    const headerView = <TableRow>{
        header.map((item, i) => {
            return (
                i === 0 ? <TableCell align="left">{item.name}</TableCell> :
                    <TableCell align="left">{item.name}</TableCell>
            )
        })} </TableRow>;

    const bodyView = (body.map((item, i) => {
        return <TableRow key={item.name} scope="item">
            <TableCell>3.{i + 1}</TableCell>
            <TableCell>{item.subHeading}</TableCell>
            <TableCell><a href={item.link} target={'_blank'}>{item.name}</a></TableCell>
        </TableRow>
    }));

    return (<Aux>
        <Typography variant="h6" component="h3" style={{marginTop: '40px'}}>
            3. Nurturing Talent
        </Typography>
        <GenericTable headerArray={headerView} bodyArray={bodyView}/>
    </Aux>)
};


const FacilitatingOperationsTable = () => {
    const header = [{
        name: '#',
    }, {
        name: 'Topic',
    }, {
        name: 'Resources'
    }];

    const body = [{
        name: 'Guest House Facilities List',
        subHeading: 'Stay',
        link: 'https://docs.google.com/spreadsheets/d/1xDL-yFB32d3tseFLz0_CRWqZ0ZkAai7PmpHxqs-C6Bo/edit#gid=947839659'
    }, {
        name: 'Delhi Office Management Checklist',
        subHeading: '',
        link: 'https://docs.google.com/spreadsheets/d/1rC7gQ-awZsEZbsGcqWecksAkb8C6Ftny97kHFKgPoaY/edit#gid=0'
    }, {
        name: 'Cab Guidelines',
        subHeading: 'Travel',
        link: 'https://drive.google.com/open?id=1iCXL2lcCl64fXPmu9khaydKsR2-WpioK'
    }, {
        name: 'Train Guidelines',
        subHeading: '',
        link: 'https://drive.google.com/file/d/1z6F6oP7AheWRGHeiq01X0dNSav_XoPW2/view?usp=sharing'
    }, {
        name: 'Air Travel Guidelines',
        subHeading: '',
        link: 'https://drive.google.com/file/d/15qxdgz78R3iyvnILESptErGGkgxtv1pG/view?usp=sharing'
    }, {
        name: 'Leave Policy',
        subHeading: 'Leaves',
        link: 'https://drive.google.com/open?id=1dfwDmuJ-FuRyhh2D62UH9lJBKbmszPji'
    }, {
        name: 'Holiday List',
        subHeading: '',
        link: 'https://drive.google.com/open?id=1yKJewoKPvuKZ7zl9iUUGf7qZhEjvs52ySK6fqm-w4_8'
    }, {
        name: 'Darshan Guidelines',
        subHeading: '',
        link: 'https://drive.google.com/file/d/1KaSFPr63Yt5HlTf0gQH12MZDeC1buDAI/view?usp=sharing'
    }, {
        name: 'Tech Directory',
        subHeading: 'Services',
        link: 'https://docs.google.com/document/d/1wiKsSrtkfWoPzsO_VBLDHBQsn9IGI5RW_DeHk-FqBVo/edit#'
    }, {
        name: 'Graphic Design & Branding Guidelines',
        subHeading: '',
        link: 'https://drive.google.com/drive/u/1/folders/1PzUVWdMr0FU2yCBtoVh7CfD0ZpL-fzYE'
    }, {
        name: 'Graphic Design Calendar',
        subHeading: '',
        link: 'https://docs.google.com/spreadsheets/d/1UxhLpwkzNoUcWzHNuh4Cwa8amq3lllpmAg67n0t5f4o/edit#gid=2095892444'
    }, {
        name: 'Library Guidelines',
        subHeading: '',
        link: 'https://drive.google.com/file/d/1BxzngZo548_BqJKWNfnn6Qng6mSMB7rb/view?usp=sharing'
    }, {
        name: 'Library Catalogue',
        subHeading: '',
        link: 'https://docs.google.com/spreadsheets/d/1PxYplRzAqISLr3q_A7--nkq5DWhEDR87kkDE-975wwY/edit#gid=944677166'
    }, {
        name: 'Engagement Update Guidelines',
        subHeading: 'Updates',
        link: 'https://drive.google.com/file/d/1Lab9eak2I_SA7M7aSO8X4FWvOziRM1D2/view?usp=sharing'
    }, {
        name: 'Townhall Guidelines',
        subHeading: '',
        link: 'https://drive.google.com/file/d/13UD1z3beMEdoBSn8CCquiuZigZ5zPycv/view?usp=sharing'
    }, {
        name: 'Townhall PPT and Pictures',
        subHeading: '',
        link: 'https://drive.google.com/open?id=13VLMfF_6oVJyTar3kCc6QM8tdnwgFU7k'
    }, {
        name: 'Policy and operating guidelines for ICC',
        subHeading: 'Policy Against Sexual Harassment',
        link: 'https://drive.google.com/open?id=12LAHymwuPW6O6HLt7Cdh1SXX88jroep7'
    },];

    const headerView = <TableRow>{
        header.map((item, i) => {
            return (
                i === 0 ? <TableCell align="left">{item.name}</TableCell> :
                    <TableCell align="left">{item.name}</TableCell>
            )
        })} </TableRow>;

    const bodyView = (body.map((item, i) => {
        return <TableRow key={item.name} scope="item">
            <TableCell>4.{i + 1}</TableCell>
            <TableCell>{item.subHeading}</TableCell>
            <TableCell><a href={item.link} target={'_blank'}>{item.name}</a></TableCell>
        </TableRow>
    }));

    return (<Aux>
        <Typography variant="h6" component="h3" style={{marginTop: '40px'}}>
            4. Facilitating Operations
        </Typography>
        <GenericTable headerArray={headerView} bodyArray={bodyView}/>
    </Aux>)
};
