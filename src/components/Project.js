import React from 'react';
import styled from 'styled-components';

const Project = ({ displayName, tools, link, description, imageSrc }) => {
    return (
        <Container>
            <Text>
                <h1>{displayName}</h1>
                <Tools>{tools.join(', ')}, <Link href={link}>Github</Link></Tools>
                <Description>{description}</Description>
            </Text>
            <Image src={imageSrc} alt="Project Image" />
        </Container>
    );
};

export default Project;

const Text = styled.div`
    display: flex;
    flex-direction: column;
`;

const Image = styled.img`
    border-radius: 1rem;
    object-fit: cover;
`;

const Container = styled.div`
    display: flex;
    width: 40rem;
    height: 15rem;
    padding: 0.5rem;
    background-color: lightgray;
    border-radius: 0.5rem;
    box-shadow: -1px -1px 0 black, 2px -2px 0 black, -2px 2px 0 black, 2px 2px 0 black; 
    margin-top: 2rem;
`;

const Tools = styled.p`
    display: flex;
    font-weight: semi-bold;
`;

const Link = styled.a`
    margin-left: 0.3rem;
    font-weight: semi-bold;
`;

const Description = styled.p`
    color: black;
`;
