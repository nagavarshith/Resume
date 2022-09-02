import './App.css';
import resume from './data/db.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, CardHeader, CardBody, CardText, ListGroup, ListGroupItem } from 'reactstrap';
function App() {
  return (
    <div className="App">
      <Container className='mt-2'>
        <h2>{resume.name}</h2>
        <span>{resume.email}</span>
        <span>{resume.mobile}</span>
        <span>{resume.address}</span>
        <Container>
          <Card className='col-2 my-2'>
            <img
              alt="Sample"
              src="./favicon.jpeg"
            />
          </Card>
        </Container>
      </Container>
      <Container className='mt-3'>
        <Card>
          <CardHeader tag="h6">
            Education
          </CardHeader>
          <ListGroup flush>
            {/* {resume.education.map((ed)=>
             (
              <li key={ed.id}>{ed.course}</li>

            ))} */}
            {
              resume.education.map((ed) => (
                <ListGroupItem key={ed.id}>{ed.course} in {ed.institute} with {ed.score}</ListGroupItem>
              ))
            }
          </ListGroup>
        </Card>
      </Container>
      <Container className='mt-3'>
        <Card>
          <CardHeader tag="h6">
            Internships
          </CardHeader>
          <ListGroup flush>
            {/* {resume.education.map((ed)=>
             (
              <li key={ed.id}>{ed.course}</li>

            ))} */}
            {
              resume.internships.map((ed) => (
                <ListGroupItem >{ed}</ListGroupItem>
              ))
            }
          </ListGroup>
        </Card>
      </Container>
      <Container className='mt-3'>
        <Card>
          <CardHeader tag="h6">
            Certifications
          </CardHeader>
          <ListGroup flush>
            {/* {resume.education.map((ed)=>
             (
              <li key={ed.id}>{ed.course}</li>

            ))} */}
            {
              resume.certificates.map((ed) => (
                <ListGroupItem>{ed}</ListGroupItem>
              ))
            }
          </ListGroup>
        </Card>
      </Container>
      <Container className='mt-3'>
        <Card>
          <CardHeader tag="h6">
            Projects
          </CardHeader>
          <ListGroup flush>
            {/* {resume.education.map((ed)=>
             (
              <li key={ed.id}>{ed.course}</li>

            ))} */}
            {
              resume.projects.map((ed) => (
                <ListGroupItem>{ed}</ListGroupItem>
              ))
            }
          </ListGroup>
        </Card>
      </Container>
      <Container className='mt-3'>
        <Card>
          <CardHeader tag="h6">
            Skills
          </CardHeader>
          <ListGroup flush>
            {/* {resume.education.map((ed)=>
             (
              <li key={ed.id}>{ed.course}</li>

            ))} */}
            {
              resume.skills.map((ed) => (
                <ListGroupItem>{ed}</ListGroupItem>
              ))
            }
          </ListGroup>
        </Card>
      </Container>
      <Container className='mt-3'>
        <Card>
          <CardHeader tag="h6">
            Hobbies
          </CardHeader>
          <ListGroup flush>
            {/* {resume.education.map((ed)=>
             (
              <li key={ed.id}>{ed.course}</li>

            ))} */}
            {
              resume.hobbies.map((ed) => (
                <ListGroupItem>{ed}</ListGroupItem>
              ))
            }
          </ListGroup>
        </Card>
      </Container>


    </div>
  );
}

export default App;
