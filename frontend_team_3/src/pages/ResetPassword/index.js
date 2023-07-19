import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './style.css'

const ResetPassword = () => {

    const [changePassword, setChangePassword] = useState('');
    const [confrimChangePassword, setConfrimChangePassword] = useState('');
    const [error, setError] = useState('')
    const [checked, setChecked] = useState(false)
    const navigate = useNavigate()
    function handleSubmit(e) {
        e.preventDefault();
        if (changePassword !== confrimChangePassword) {
            setError('password does not match');
        } else if (changePassword === '' || confrimChangePassword === '') {
            setError('Something is missing')
        }
        else {
            console.log('get user email -- password has been changed');
            navigate('/parent')
        }
    }


    return (
        <div className='container'>
            <div className='d-flex flex-column flex-wrap w-25 gap-2' style={{ margin: '10% auto' }}>
                <div className='form-group'>
                    <label htmlFor='changepassord'>Change Password</label>
                    <input type={checked ? 'text' : 'password'} value={changePassword} onChange={(e) => setChangePassword(e.target.value)} className='form-control' />
                </div>
                <div className='form-group'>
                    <label htmlFor='changepassord'>Confrim Change Password</label>
                    <input type={checked ? 'text' : 'password'} value={confrimChangePassword} onChange={(e) => setConfrimChangePassword(e.target.value)} className='form-control' />
                </div>
                <div className="form-check">
                    <input type="checkbox" value={checked} className="form-check-input" onClick={() => setChecked(!checked)} />
                    <label className="form-check-label" for="exampleCheck1">Show Password</label>
                </div>
                <button type="submit" className="btn text-white" onClick={handleSubmit} style={{ backgroundColor: '#007580' }}>Change Password</button>
                <span>{error}</span>
            </div>
        </div>
    )
}

export default ResetPassword