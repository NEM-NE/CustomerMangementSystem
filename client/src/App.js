import React from 'react';
import Customer from './components/Customer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width:"100%",
    marginTop:theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
})

const customers = [
  {
    id: 1,
    image: "https://placeimg.com/64/64/1",
    name: "honggildong",
    birth: "990727",
    sex: "male",
    job: "student"
  },
  {
    id: 2,
    image: "https://placeimg.com/64/64/2",
    name: "sungbin",
    birth: "960914",
    sex: "male",
    job: "developer"
  },
  {
    id: 3,
    image: "https://placeimg.com/64/64/3",
    name: "NEMNE",
    birth: "000927",
    sex: "female",
    job: "hacker"
  }
]

class App extends React.Component {

  render() {
    const { classes } = this.props;
    return <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>사진</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.map((customer) => {
            return (
              <Customer
                key={customer.id}
                id={customer.id}
                image={customer.image}
                name={customer.name}
                birth={customer.birth}
                sex={customer.sex}
                job={customer.job}
              />
            )
          })
          }
        </TableBody>
      </Table>
    </Paper>
  };
}

export default withStyles(styles)(App);
