"use client"
import React from 'react';
import { Nav } from 'rsuite';
import { GiCoffeeBeans, GiCoffeePot } from "react-icons/gi";
import Link from 'next/link';

export default function NavMenu() {
    return (
        <div className='mx-auto text-center mt-28'>
            <Nav className='h-10 bg-stone-400'>
                <Nav.Menu title="Cafeteiras">
                    <Nav.Item as={Link} href='/cafeteiras/aeropress'>Aeropress</Nav.Item>
                    <Nav.Item as={Link} href='/cafeteiras/cafeteira-pressca'>Cafeteira Pressca</Nav.Item>
                    <Nav.Item as={Link} href='/cafeteiras/cafeteira-italiana'>Cafeteira Italiana</Nav.Item>
                    <Nav.Item as={Link} href='/cafeteiras/prensa-francesa'>Prensa Francesa</Nav.Item>
                    <Nav.Item as={Link} href='/cafeteiras/passador'>Passador</Nav.Item>
                </Nav.Menu>
                <Nav.Menu title="Acessórios" className=''>
                    <Nav.Item as={Link} href='/acessorios/chaleiras'>Chaleiras</Nav.Item>
                    <Nav.Item as={Link} href='/acessorios/canecas-e-xicaras'>Canecas e Xícaras</Nav.Item>
                    <Nav.Item as={Link} href='/acessorios/moedores-de-cafe'>Moedores de Café</Nav.Item>
                    <Nav.Item as={Link} href='/acessorios/leiteira'>Leiteira</Nav.Item>
                    <Nav.Item as={Link} href='/acessorios/cremeiras'>Cremeiras</Nav.Item>
                    <Nav.Item as={Link} href='/acessorios/jarras'>Jarras</Nav.Item>
                    <Nav.Item as={Link} href='/acessorios/balancas'>Balanças</Nav.Item>
                </Nav.Menu>
                <Nav.Item icon={<GiCoffeePot />} href='/kits'>Kits</Nav.Item>
                <Nav.Item icon={<GiCoffeeBeans />} href='/cafes-especiais'>Cafés Especiais</Nav.Item>
            </Nav>
        </div>
    )
}