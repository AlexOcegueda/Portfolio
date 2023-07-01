import React from 'react';
import styled from 'styled-components';

const Project = ({ displayName, tools, link, description, imageSrc }) => {
    return (
        <Container>
            <Text>
                <h2>{displayName}</h2>
                <Tools id='tool'>{tools.join(', ')}</Tools>
                <Description>{description}</Description>
                <Link href={link}>See on Github →</Link>
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
    width: 20rem;
`;

const Container = styled.div`
    display: flex;
    width: 40rem;
    height: 15rem;
    margin-top: 2rem;
    padding: 1rem;
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
    margin-right: .5rem;
`;
