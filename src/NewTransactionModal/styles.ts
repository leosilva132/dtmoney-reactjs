import styled from "styled-components";
import { darken, transparentize } from 'polished'

export const Container = styled.form`
    h2 {
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;
        border: 1px solid #d7d7d7;
        background: #E7E9EE;

        font-size: 1rem;
        font-weight: 400;
        
        &::placeholder {
            color: var(--text-body);
        }

        & + input {
            margin-top: 1rem;
        }
    }

    button[type="submit"] {
        width: 100%;
        padding: 0 1.5rem;
        background: var(--green);
        margin-top: 1.5em;
        color: #fff;
        height: 4rem;
        border-radius: 0.25rem;
        border: none;

        font-size: 1rem;
        font-weight: 600;

        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.9);
        }
    }
`;

export const TransactionTypeContainer = styled.div`
    margin: 1rem 0;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
    
`;

interface RadioBoxProps {
    isActive: boolean;
    activeColors: 'green' | 'red';
}

const Colors = {
    green: '#33CC95',
    red: '#E52e4D'
}

export const RadioBox = styled.button<RadioBoxProps>`

                height: 4rem;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 1rem;
                border: 1px solid #d7d7d7;
                border-radius: 0.25rem;
                transition: border-color 0.2s;

                background: ${(props) => props.isActive ? transparentize(0.9, Colors[props.activeColors]) : 'transparent'};

                &:hover {
                    border-color: ${darken(0.1, '#d7d7d7')} ;
                }

                img {
                    width: 20px;
                    height: 20px;
                }

                span {
                    font-size: 1rem;
                    color: var(--text-title);
                }
`;