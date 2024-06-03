import React from 'react'

export default function Input(props) {

    return (
        <div className="container text-center mx-5">
            <div className="row">
                <div className="col-5 text_align">
                    <input type="text" placeholder='Enter name of product' onChange={props.onChange} value={props.input}/>
                </div>
                <div className="col-5 text_align">
                    <input type="date"  onChange={props.onChanged} value={props.inputd}/>
                </div>
                <div className="col-2">
                    <button type='button' className='btn btn-success' onClick={props.new_add}>  ADD  </button>
                </div>
            </div>
        </div>
    )
}
