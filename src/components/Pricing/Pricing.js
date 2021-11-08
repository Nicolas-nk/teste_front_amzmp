import React from 'react';
import { Button } from '../Button/Button.js';
import './Pricing.css';
import { Link } from 'react-router-dom';

function Pricing() {
  return (
      <div className='pricing__section'>
        <div className='pricing__wrapper'>

          <h1 className='pricing__heading'>Preços</h1>
          <p className='princing__description'>Escolha a solução perfeita para seu restaurante!</p>

          <div className='pricing__container'>
            <Link to='/' className='pricing__container-card'>
                <div className='pricing__container-cardInfo'>
                    <div className='top-colored-box'></div>
                    <div className='pricing__header'>
                        <h3>0 EUR</h3>
                    </div> 
                    <h2 className='ribbon'>Ementa Digital</h2>
                    <ul className='pricing__container-features'>
                        <li>
                            <h4>Menu online</h4>
                            <p>Menu Digital gratuito, com personalização da marca e pagamento online. Disponível em plataformas como TV corporativa, intranet, web e app.</p>
                        </li>
                        <li>
                            <h4>Sem limite de produtos</h4>
                            <p>Cadastre as suas opções sem se preocupar com espaços e limitar os seus produtos.</p>
                        </li>
                        <li>
                            <h4>Sem limite de imagens</h4>
                            <p>Insira quantas imagens forem necessárias para detalhar o seu produto, sem limite de espaço.</p>
                        </li>
                        <li>
                            <h4>Sem limite de traduções</h4>
                            <p>Escolha livremente os idiomas que deseja disponibilizar em seu cardápio.</p>
                        </li>
                        <li>
                            <h4>Suporte técnico via e-mail</h4>
                            <p>Nossos especialistas estão aptos para dar todo o suporte necessário sobre os nossos serviços e produtos através do e-mail.</p>
                        </li>
                        <li>
                            <h4>Gestão via tablet ou PC</h4>
                            <p>Uma ferramenta para simplificar a gestão do estoque e organizar o restaurante online.</p>
                        </li>
                    </ul>
                    <Button buttonSize='btn--large' buttonColor='gradient'>resgistrar</Button>
                    <div className='bottom-colored-box'></div>
              </div>
            </Link>

            <Link to='/' className='pricing__container-card'>
                <div className='pricing__container-cardInfo'>
                    <div className='top-colored-box'></div>
                    <div className='pricing__header'>
                        <h3>20 EUR/mês</h3>
                        <p>Realize a sua gestão de forma profissinal e eficiente.</p>
                    </div>    
                    <h2 className='ribbon'>Gestão de Sala</h2>
                    <ul className='pricing__container-features'>
                        <li>
                            <h4>As funcionalidades do Menu Digital</h4>
                            <p>Adquira todas os serviços do plano Menu Digital. </p>
                        </li>
                        <li>
                            <h4>Permita reservas de mesa</h4>
                            <p>Sistema para gestão do fluxo de espera, que oferece a opção de reserva de mesas online através do celular ou totem.</p>
                        </li>
                        <li>
                            <h4>Gestão de filas de espera</h4>
                            <p>Através da inteligência artificial, temos um sistema que reconhece o padrão de filas geradas em horários de grande movimento no seu estabelecimento comercial.</p>
                        </li>
                        <li>
                            <h4>Visão do estado da sala</h4>
                            <p>Um sistema que permite a visualização online da ocupação do restaurante pelo maître e pelo cliente, que tem a possibilidade de entrar na fila de espera através dessa visão. </p>
                        </li>
                        <li>
                            <h4>Suporte técnico via e-mail</h4>
                            <p>Nossos especialistas estão aptos para dar todo o suporte necessário sobre os nossos serviços e produtos através do e-mail.</p>
                        </li>
                        <li>
                            <h4>Relatórios de uso</h4>
                            <p>Tenha acesso a um relatório completo com histórico de pedidos e faturamento.</p> 
                        </li>
                        <li>
                            <h4>Suporte via e-mail e telefone</h4>
                            <p>Nossos especialistas estão aptos para dar todo o suporte necessário sobre os nossos serviços e produtos, através do e-mail e telefone.</p> 
                        </li>
                    </ul>
                    <Button buttonSize='btn--large' buttonColor='gradient'>resgistrar</Button>
                    <div className='bottom-colored-box'></div>
                </div>
            </Link>

            <Link to='/' className='pricing__container-card'>
                <div className='pricing__container-cardInfo'>
                    <div className='top-colored-box'></div>
                    <div className='pricing__header'>
                        <h3>45 EUR/mês</h3>
                        <p>Realize a sua gestão de forma profissinal e eficiente.</p>
                    </div>  
                    <h2 className='ribbon'>Delivery e Take away</h2>
                    <ul className='pricing__container-features'>
                        <li>
                            <h4>Funcionalidades de gestão de sala</h4>
                            <p>Adquira todos os serviços do plano Menu Digital.</p>
                        </li>
                        <li>
                            <h4>Pedidos de delivery</h4>
                            <p>Os pedidos são realizados online através do app e entregues ao cliente no local desejado.</p>
                        </li>
                        <li>
                            <h4>Pedidos de take away</h4>
                            <p>Os pedidos são realizados online através do app e a comida será retirada no próprio estabelecimento. </p>
                        </li>
                        <li>
                            <h4>Sem limite de traduções</h4>
                            <p>Escolha livremente os idiomas que deseja disponibilizar em seu cardápio.</p>
                        </li>
                        <li>
                            <h4>Organize a sua cozinha no KDS</h4>
                            <p>O software de gestão KDS (Kitchen Display System) é um grande aliado para otimizar os processos da cozinha e aumentar a produtividade dos colaboradores.</p>
                        </li>
                        <li>
                            <h4>Sem comissões</h4>
                            <p>Não cobramos comissões para realizar os serviços de delivery e take away no nosso app.</p>
                        </li>
                        <li>
                            <h4>Suporte 24 horas</h4>
                            <p>Nossos especialistas estão disponíveis para oferecer todo o suporte necessário, 24 horas por dia.</p>
                        </li>
                    </ul>
                    <Button buttonSize='btn--large' buttonColor='gradient'>resgistrar</Button>
                    <div className='bottom-colored-box'></div>
                </div>
            </Link>
            
          </div>
        </div>
      </div>
  );
}
export default Pricing;
