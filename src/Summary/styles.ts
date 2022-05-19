import styled from "styled-components";


export const Container = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
   
    div {
        margin-top: -5rem;
        padding: 1.5rem 2rem;
        background: var(--shape);
        color: var(--text-title);
        border-radius: 0.25rem;
        filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.25));

  
    
    
        header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 1rem;
        }

        strong {
            display: block;
            font-size: 2.25rem;
            font-weight: 500;
            margin-top: 1rem;
            
        }

        &.highlightCard {
            background: var(--green);
            color: var(--shape)
        }
    }
`;