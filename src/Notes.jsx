import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ADD_USER, DELETE_USER } from './action/action';
import { FaPlus } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

function Notes() {

    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [textarea, setTextaea] = useState('');
    const id = Math.floor(Math.random() * 100);
    const record = useSelector(state => state.crud.users)

    const handleSubmit = (e) => {
        e.preventDefault();
        let obj = { title, textarea, id }
        dispatch(ADD_USER(obj));
        setTextaea('');
        setTitle('')
    }

    return (
        <>
            <div style={{ padding: '20px', display: 'flex', textAlign: 'center', backgroundColor: '#f1d37d', justifyContent: 'center' }}>
                <div className="img">
                    <img src="https://www.technipages.com/wp-content/uploads/2019/10/Google-Keep-Tips.jpg" width={50} style={{ marginRight: '10px' }} />
                </div>
                <div className="content">
                    <h2>Google Keep</h2>
                </div>
            </div>


            <center>
                <form onSubmit={handleSubmit} style={{ boxShadow: '5px 5px 7px #aaaaaa', width: '15%', margin: '50px', padding: '8px' }}>
                    <table>
                        <thead>
                            <tr>
                                <p style={{ fontSize: '18px' }}>
                                    <input type="text" placeholder='Title' style={{ border: 'none', outline: 'none' }} onChange={(e) => setTitle(e.target.value)} value={title} />
                                </p>
                                <p style={{ fontSize: '18px' }}>
                                    <textarea placeholder='Write a Note...' style={{ border: 'none', outline: 'none' }} onChange={(e) => setTextaea(e.target.value)} value={textarea}></textarea>
                                </p>
                                <button style={{ border: 'none', background: 'white', marginLeft: '85px', marginBottom: '8px' }}>

                                    <FaPlus style={{ color: '#f6b911', fontSize: '28px' }} />
                                </button>
                            </tr>
                        </thead>
                    </table>
                </form>

                <br></br><br></br>

                <div style={{display : 'flex' , justifyContent : 'center', flexWrap : 'wrap'}}>
                    {
                        record.map((val) => 
                            <form style={{ boxShadow: '5px 5px 7px #aaaaaa', width: '15%', margin: '50px', padding: '8px' }}>
                                <table>
                                    <thead>
                                        <tr>
                                            <p style={{ fontSize: '18px' }}>
                                                {val.title}
                                            </p>
                                            <p style={{ fontSize: '18px' }}>
                                                {val.textarea}
                                            </p>
                                            <button type='button' className='btn btn-danger' onClick={() => dispatch(DELETE_USER(val.id))}>
                                                <MdDeleteOutline style={{ fontSize: '20px' }} />
                                            </button>
                                        </tr>
                                    </thead>
                                </table>
                            </form>
                        )
                    }
                </div>        
            </center>



            <footer style={{ display: 'flex', textAlign: 'center', backgroundColor: '#f1d37d', position: 'fixed', width: '100%', bottom: '0' }}>
                <p style={{ margin: '0 auto', fontWeight: 'normal', color: 'blacknp', padding: '4px' }}>CopyRight 2024</p>
            </footer>
        </>
    )
}

export default Notes 