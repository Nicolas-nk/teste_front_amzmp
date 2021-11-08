import React from 'react'
import './Contact.css'
import { Button } from '../Button/Button'

function Contact() {
    return (
        <div className='contact-container'>
            <div className='contact__call-to-action'>
                <h2>Impulsione as sua vendas. Fidelize os seus clientes! Comece agora mesmo!</h2>
                <p>Inscreva-s e comece a usar todas as funcionalidades gratuitas.</p>
                <p>Troque de plao a qualquer momento através da sua área de cliente e de acordo com as suas necessidades</p>
                <Button buttonSize='btn--wide' buttonColor='primary' >Inscreva-se</Button>
            </div>
            <div className='contact__email-line'>
                <div className='contact__email-line-wrapper'>
                    <img src='images/mail-icon.png' alt='e-mail' />
                    <div className='contact__email-line-text'>
                        <p>Registrar-se para receber</p>
                        <p>Preços e ofertas esclusivas!</p>
                    </div>
                    <input type='text' />
                    <Button buttonSize='btn--medium' buttonColor='cyan'>Resgistrar</Button>
                   
                </div>    
            </div>
            <div className='contact__form'>
                <h1>Contato</h1>
                <form>
                    <div className='lines'>
                        <input type='text' placeholder='Name' />
                        <input type='text' placeholder='Email' />
                         <input type='text' placeholder='Subject' />
                    </div>
                    <div className='box'>
                        <textarea name='subject' placeholder='Subject' />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact
