import styled from "styled-components";

export const Container = styled.header`
    background: var(--blue);
`;

export const Contente = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    padding: 2rem 1rem 12rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
        padding: 0 2rem;
        height: 3rem;
        border-radius: 0.25rem;
        border: none;
        background: var(--blue-light);
        color: var(--shape);

        transition: .2s;

        &:hover {
            filter: brightness(0.9);
        }
    }

`;