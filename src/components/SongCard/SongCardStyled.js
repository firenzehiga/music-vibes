import styled from "styled-components";
// Styled Components
export const Card = styled.div`
    background: var(--card-background);
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    position: relative;

    &:hover {
        transform: translateY(-8px);
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
    }
`;

export const ImageContainer = styled.div`
    position: relative;
    padding-top: 100%;
`;

export const Image = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;

    ${Card}:hover & {
        filter: blur(4px);
    }
`;

export const Content = styled.div`
    padding: 16px;

    @media (min-width: 768px) {
        padding: 20px;
    }
    @media (min-width: 992px) {
        padding: 24px;
    }
`;

export const Title = styled.h3`
    font-size: 18px;
    font-weight: 600;
    color: var(--text-color);
    margin-bottom: 6px;

    @media (min-width: 768px) {
        font-size: 20px;
    }
`;

export const Artist = styled.p`
    color: #64748b;
    font-size: 14px;

    @media (min-width: 768px) {
        font-size: 16px;
    }
`;

export const PlayButton = styled.div`
    position: absolute;
    background: var(--primary-color);
    color: white;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.3s ease;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    ${Card}:hover & {
        opacity: 1;
    }

    @media (min-width: 768px) {
        width: 55px;
        height: 54px;
    }
`;

export const IconImg = styled.img`
    width: 20px;
    height: 20px;
    filter: none !important;

    @media (min-width: 768px) {
        width: 25px;
        height: 25px;
    }
`;
