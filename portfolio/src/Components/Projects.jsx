import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GitHubButton from './GitHubButton';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';


export default function ImgMediaCard() {
    return (
        <div style={{
            height: '110vh',
        }}>
            <div style={{
                width: '100vh',
                display: 'left',
                padding: '20px',
                paddingTop: '40px',
                paddingBottom: '40px',
                fontSize: '20px',
                flexDirection: 'column',
                color: '#f2f2f2',
                paddingLeft: '180px',
            }}>
                <h2>Projetos</h2>

                <p style={{
                    paddingTop: '20px',
                    maxWidth: '600px',
                }}>Projetos que já desenvolvi ou estou desenvolvendo</p>

            </div>

            <div style={{ position: 'relative' }}>
                <Carousel fade
                    nextIcon={
                        <button style={{ background: 'none', border: 'none', position: 'absolute', right: 0 }}>
                            <FaArrowRight style={{ color: '#f5f5f5', fontSize: '20px' }} />
                        </button>
                    }
                    prevIcon={
                        <button style={{ background: 'none', border: 'none', position: 'absolute', left: 0 }}>
                            <FaArrowLeft style={{ color: '#f5f5f5', fontSize: '20px' }} />
                        </button>
                    }
                    indicators={false}
                >
                    <Carousel.Item>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                            <a href="https://github.com/SamuellAguiar/Pizzaria" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <Card sx={{ maxWidth: 345, maxHeight: 600, backgroundColor: '#363636', color: '#f5f5f5', borderRadius: '5%' }}>
                                    <CardMedia
                                        component="img"
                                        alt="green iguana"
                                        height="230"
                                        width="375"
                                        image="/assets/Pizzaria.png"
                                    />
                                    <CardContent style={{ padding: '20px' }}>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Pizzaria
                                        </Typography>
                                        <Typography variant="body2">
                                            Este projeto foi desenvolvido como parte do trabalho da disciplina Banco de Dados 1, com o objetivo principal de oferecer aos usuários uma interface intuitiva para realizar pedidos personalizados de pizzas.
                                        </Typography>

                                        <Typography variant='body2' style={{ paddingTop: '15px' }}>
                                            <b>Tech Stack</b>: PHP, MySQL, HTML, CSS, JavaScript
                                        </Typography>
                                    </CardContent>

                                    <CardActions style={{ justifyContent: 'flex-end' }}>
                                        <a href="https://github.com/SamuellAguiar/Pizzaria" style={{ textDecoration: 'none', color: 'inherit' }}>
                                            <GitHubButton />
                                        </a>
                                    </CardActions>
                                </Card>
                            </a>

                            <a href="https://github.com/SamuellAguiar/VelozaCLUB" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <Card sx={{ maxWidth: 345, maxHeight: 600, backgroundColor: '#363636', color: '#f5f5f5', borderRadius: '5%' }}>
                                    <CardMedia
                                        component="img"
                                        alt="green iguana"
                                        height="230"
                                        width="375"
                                        image="/assets/VelozaCLUB.png"
                                    />
                                    <CardContent style={{ padding: '20px' }}>
                                        <Typography gutterBottom variant="h5" component="div">
                                            VelozaCLUB
                                        </Typography>
                                        <Typography variant="body2">
                                            Este projeto foi desenvolvido para a matéria de Sistemas WEB I. O objetivo é criar um sistema de venda veículos antigos, onde o usuário pode se cadastrar, fazer login, visualizar os veículos disponíveis e entrar em contato com o vendedor.
                                        </Typography>

                                        <Typography variant='body2' style={{ paddingTop: '15px' }}>
                                            <b>Tech Stack</b>: React, Django, Sqlite
                                        </Typography>
                                    </CardContent>
                                    <CardActions style={{ justifyContent: 'flex-end' }}>
                                        <a href="https://github.com/SamuellAguiar/VelozaCLUB" style={{ textDecoration: 'none', color: 'inherit' }}>
                                            <GitHubButton />
                                        </a>
                                    </CardActions>
                                </Card>
                            </a>

                            <a href="https://github.com/SamuellAguiar/Login-Instagram" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <Card sx={{ maxWidth: 345, maxHeight: 600, backgroundColor: '#363636', color: '#f5f5f5', borderRadius: '5%' }}>
                                    <CardMedia
                                        component="img"
                                        alt="green iguana"
                                        height="230"
                                        width="375"
                                        image="/assets/Login-Instagram.png"
                                    />
                                    <CardContent style={{ padding: '20px' }}>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Clone Login Instagram
                                        </Typography>
                                        <Typography variant="body2">
                                            O projeto consiste em criar uma página web clone da página de login do Instagram com modo dark. Possuindo também links que redirecionam para as páginas de cadastro e recuperação de senha. Além de todos os links funcionais, a página é responsiva.
                                        </Typography>

                                        <Typography variant='body2' style={{ paddingTop: '15px' }}>
                                            <b>Tech Stack</b>: HTML, CSS, JavaScript
                                        </Typography>
                                    </CardContent>

                                    <CardActions style={{ justifyContent: 'flex-end' }}>
                                        <a href="https://github.com/SamuellAguiar/Login-Instagram" style={{ textDecoration: 'none', color: 'inherit' }}>
                                            <GitHubButton />
                                        </a>
                                    </CardActions>
                                </Card>
                            </a>
                        </div>
                    </Carousel.Item>

                    <Carousel.Item>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                            <a href="https://github.com/SamuellAguiar/E-Commerce" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <Card sx={{ maxWidth: 345, maxHeight: 600, backgroundColor: '#363636', color: '#f5f5f5', borderRadius: '5%' }}>
                                    <CardMedia
                                        component="img"
                                        alt="green iguana"
                                        height="230"
                                        width="375"
                                        image="/assets/ShopShoe.png"
                                    />
                                    <CardContent style={{ padding: '20px' }}>
                                        <Typography gutterBottom variant="h5" component="div">
                                            ShopShoe
                                        </Typography>
                                        <Typography variant="body2">
                                            Esse projeto é um e-commerce, possuindo um menu lateral que é ativado quando clicado no ícone do menu, funcionalidades como adicionar produtos ao carrinho, remover produtos do carrinho e aumentar ou diminuir a quantidade de produtos.
                                        </Typography>

                                        <Typography variant='body2' style={{ paddingTop: '15px' }}>
                                            <b>Tech Stack</b>: HTML, CSS e JavaScript
                                        </Typography>
                                    </CardContent>

                                    <CardActions style={{ justifyContent: 'flex-end' }}>
                                        <a href="https://github.com/SamuellAguiar/E-Commerce" style={{ textDecoration: 'none', color: 'inherit' }}>
                                            <GitHubButton />
                                        </a>
                                    </CardActions>
                                </Card>
                            </a>

                            <a href="https://github.com/SamuellAguiar/Calculadora" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <Card sx={{ maxWidth: 345, maxHeight: 600, backgroundColor: '#363636', color: '#f5f5f5', borderRadius: '5%' }}>
                                    <CardMedia
                                        component="img"
                                        alt="green iguana"
                                        height="230"
                                        width="375"
                                        image="assets/Calculator.png"
                                    />
                                    <CardContent style={{ padding: '20px' }}>
                                        <Typography gutterBottom variant="h5" component="div">
                                            QuickCalc
                                        </Typography>
                                        <Typography variant="body2">
                                            Projeto de uma calculadora simples. A calculadora possui as operações básicas de soma, subtração, multiplicação e divisão.
                                        </Typography>

                                        <Typography variant='body2' style={{ paddingTop: '15px' }}>
                                            <b>Tech Stack</b>: HTML, CSS e JavaScript
                                        </Typography>
                                    </CardContent>
                                    <CardActions style={{ justifyContent: 'flex-end', paddingTop: "65px" }}>
                                        <a href="https://github.com/SamuellAguiar/Calculadora" style={{ textDecoration: 'none', color: 'inherit' }}>
                                            <GitHubButton />
                                        </a>
                                    </CardActions>
                                </Card>
                            </a>

                            <a href="https://github.com/SamuellAguiar/Relogio-Digital" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <Card sx={{ maxWidth: 345, maxHeight: 600, backgroundColor: '#363636', color: '#f5f5f5', borderRadius: '5%' }}>
                                    <CardMedia
                                        component="img"
                                        alt="green iguana"
                                        height="230"
                                        width="375"
                                        image="/assets/Relogio-Digital.png"
                                    />
                                    <CardContent style={{ padding: '20px' }}>
                                        <Typography gutterBottom variant="h5" component="div">
                                            FlashTime
                                        </Typography>
                                        <Typography variant="body2">
                                            Projeto de um relógio digital simples. O relógio possui a funcionalidade de mostrar a hora atual.
                                        </Typography>

                                        <Typography variant='body2' style={{ paddingTop: '15px' }}>
                                            <b>Tech Stack</b>: HTML, CSS e JavaScript
                                        </Typography>
                                    </CardContent>

                                    <CardActions style={{ justifyContent: 'flex-end', paddingTop: '65px' }}>
                                        <a href="https://github.com/SamuellAguiar/Relogio-Digital" style={{ textDecoration: 'none', color: 'inherit' }}>
                                            <GitHubButton />
                                        </a>
                                    </CardActions>
                                </Card>
                            </a>
                        </div>
                    </Carousel.Item>
                </Carousel >
            </div>
        </div >
    );
}
