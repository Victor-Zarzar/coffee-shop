"use client"
import React from 'react';
import { Nav } from 'rsuite';
import { GiCoffeeBeans, GiCoffeePot } from "react-icons/gi";

export default function NavMenu() {
    return (
        <div className='mx-auto text-center mt-28'>
            <Nav className='h-10 bg-stone-400'>
                <Nav.Menu title="Cafeteiras">
                    <Nav.Item href='/cafeteiras/aeropress'>Aeropress</Nav.Item>
                    <Nav.Item>Cafeteira Pressca</Nav.Item>
                    <Nav.Item>Cafeteira Italiana</Nav.Item>
                    <Nav.Item>Prensa Francesa</Nav.Item>
                    <Nav.Item>Passador</Nav.Item>
                </Nav.Menu>
                <Nav.Menu title="Acessórios">
                    <Nav.Item>Chaleiras</Nav.Item>
                    <Nav.Item>Canecas e Xícaras</Nav.Item>
                    <Nav.Item>Moedores de Café</Nav.Item>
                    <Nav.Item>Leiteira</Nav.Item>
                    <Nav.Item>Cremeiras</Nav.Item>
                    <Nav.Item>Jarras</Nav.Item>
                    <Nav.Item>Balanças</Nav.Item>
                </Nav.Menu>
                <Nav.Item icon={<GiCoffeePot />}>Kits</Nav.Item>
                <Nav.Item icon={<GiCoffeeBeans />}>Cafés Especiais</Nav.Item>
            </Nav>
        </div>
    )
}