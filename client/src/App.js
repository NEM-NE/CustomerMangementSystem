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

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      customers:""
    }
  };

  callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  };

  componentDidMount(){
    this.callApi().then(
      res => this.setState({customers:res})
    ).catch(
      err => console.log(err)
    )
  }

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
          {this.state.customers ?
           this.state.customers.map((customer) => {
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
           : "isLoading"
          }
        </TableBody>
      </Table>
    </Paper>
  };
}

export default withStyles(styles)(App);
