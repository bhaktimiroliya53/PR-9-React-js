import React from 'react'

function A() {
    return (
        <>
            <div style={{ padding: '20px', display: 'flex', textAlign: 'center', backgroundColor: '#f1d37d' }}>
                <div className="img">
                    <img src="https://www.technipages.com/wp-content/uploads/2019/10/Google-Keep-Tips.jpg" width={50} style={{ marginRight: '10px' }} />
                </div>
                <div className="content">
                    <h2>Google Keep</h2>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <center>
                        <div style={{boxShadow: '5px 5px 7px #aaaaaa', width : '200px', margin : '50px', padding : '5px'}}>
                            <textarea
                                placeholder='Write a Note..'
                                style={{
                                    border : 'none',
                                    outline : 'none'
                                }}
                               ></textarea>
                            <button
                                style={{
                                    border: 'none',
                                    background : 'white',
                                    marginLeft : '130px'
                                }}>
                                <img src="https://avatars.mds.yandex.net/i?id=a8c4ba6a2439984dab905904a38e2462676eeca7-10896096-images-thumbs&n=13" style={{ width: '20px'}} />
                            </button>
                        </div>
                    </center>
                </div>
            </div>

            <footer style={{ marginTop: '500px', display: 'flex', textAlign: 'center', backgroundColor: '#f1d37d' }}>
                <p style={{ margin: '0 auto', fontWeight: 'normal', color: 'blacknp', padding: '4px' }}>CopyRight 2024</p>
            </footer>
        </>
    )
}

export default A