//jshint esversion:6

import React from "react";
import ReactDOM from "react-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Note from "../components/Note";
import notes from "../notes.js";

function notesCard(props)
{
  return (<Note
  key={props.key}
  title={props.title}
  content={props.content} />);
}

function App()
{
  return (<div>
            <Header />
            {notes.map(notesCard)}
            <Footer />
          </div>);
}

export default App;
