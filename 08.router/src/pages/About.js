import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const About = () => {
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    const detail = searchParams.get('detail');
    const mode = searchParams.get('mode');

    return (
        <div>
            <h1>소개</h1>
            <p>nihiahiahiah</p>
            <p>detail: {detail}</p>
            <p>mode: {mode}</p>
            <p>퀴리스트링: {location.search}</p>
        </div>
    );
}

export default About;
