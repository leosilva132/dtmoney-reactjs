import styled from "styled-components";



export const Container = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    table {
        width: 100%;
        margin-top: 5rem;
        border-spacing: 0 0.5rem;

        th {
        padding: 1rem 2rem;
        text-align: left;
        color: var(--text-body);
        line-height: 1.5rem;
        font-weight: 400;

    }

        td {
            padding: 1rem 2rem;
            background: var(--shape);
            border-radius: 0.25rem;
            color: var(--text-body);
            border: 0;

            &:first-child {
                color: var(--text-title);
            }

            &.deposit {
                color: var(--green);
            }

            &.withdraw {
                color: var(--red);
            }
        }

  




    }

  
`;