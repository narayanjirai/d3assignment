import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Navbar from '../Navabar/Navbar';
import "../../App.css";
import LineGraph from '../Graphs/LineGraph/LineGraph';
import BarChart from '../Graphs/LineGraph/BarChart/BarChart';
function MainPage() {


    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }
    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];
    return (
        <div>
            <Navbar />
            <div >
                <div className='landing_page'>
                    <div className='box_container'>
                        <div className='single_box'>
                            <LineGraph />  </div>

                    </div>
                    <div className='box_container'>
                        <div className='single_box'><BarChart /></div>

                    </div>
                </div>
                <div className='landing_page'>
                    <div className='box_container'>
                        <div className='single_box'><BarChart /></div>

                    </div>
                    <div className='box_container'>
                        <div className='single_box'>
                            <div className='acc_style'>
                                Account watchlist
                            </div>
                            <TableContainer component={Paper}>
                                <Table >
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Dessert (100g serving)</TableCell>
                                            <TableCell align="right">Calories</TableCell>
                                            <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row) => (
                                            <TableRow
                                                key={row.name}
                                                sx={{ borderBottom: 'none' }} 
                                                // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row" sx={{ borderBottom: 'none' }} >
                                                    {row.name}
                                                </TableCell>
                                                <TableCell align="right" sx={{ borderBottom: 'none' }} >{row.calories}</TableCell>
                                                <TableCell align="right" sx={{ borderBottom: 'none' }} >{row.fat}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainPage;
