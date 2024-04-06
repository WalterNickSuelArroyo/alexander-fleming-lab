import FAQ from '@/components/faq/faq';
import SEO from '@/components/seo';
import Wrapper from '@/layout/wrapper';
import React from 'react';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle="Preguntas Frecuentes " />
            <FAQ />
        </Wrapper>
    );
};

export default index;