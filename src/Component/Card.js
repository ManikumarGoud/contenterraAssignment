import React, { useEffect, useState } from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCol, MDBView, MDBMask, MDBCardImage } from 'mdbreact';
import axios from 'axios';


const Card = (props) => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('https://www.reddit.com/r/reactjs.json')
            .then(resp => {
                //console.log(resp.data.data.children)
                setPosts(resp.data.data.children)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (

        <div >
            <header>
                <MDBView className="logo">
                    <MDBMask overlay="indigo-slight" className="flex-center flex-column text-center">
                        <h2 style={{ color: 'deepskyblue' }}>ContentErra React Assignment</h2>
                    </MDBMask>
                </MDBView>
            </header>
            <br></br>
            <MDBCol  >
                {posts.map((e) => (
                    <MDBCard style={{ width: "30rem" }} className="card" key={e.id}>
                        <MDBCardBody >

                            <MDBCardTitle>Title : {e.data.title}</MDBCardTitle>
                             Description :
                            <MDBCardImage className="img-fluid" src={e.data.selftext_html} waves ></MDBCardImage>
                            <MDBCardText >URL : <a className="a" href={e.data.url} target="_blank" rel="noreferrer">{e.data.url}<br></br></a> </MDBCardText>
                            <MDBCardText>Score : {e.data.score}</MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                ))}
                <br></br>
            </MDBCol>
        </div>
    )
}

export default Card;
