import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import React from "react";
import {makeStyles} from "@material-ui/core";


const useStylesTable = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
    },
    table: {
        minWidth: 650,
    },
}));

export const GenericTable = ({headerArray, bodyArray}) => {
    const classes = useStylesTable();
    return (<Table className={classes.table}>
        <TableHead>
            {/*<TableRow>*/}
            {headerArray}
            {/*</TableRow>*/}
        </TableHead>
        <TableBody>
            {bodyArray}
        </TableBody>
    </Table>)
};
