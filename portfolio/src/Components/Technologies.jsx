import * as React from 'react';
import { LogosJavascript } from './Icons/LogosJavaScript';
import { LogosHtml5 } from './Icons/LogosHtml5';
import { LogosCss3 } from './Icons/LogosCss3';
import { LogosReact } from './Icons/LogosReact';
import { LogosBootstrap } from './Icons/LogosBootstrap';
import{ LogosPython } from './Icons/LogosPython';
import { LogosMysqlIcon } from './Icons/LogosMysqlIcon';
import { LogosJava } from './Icons/LogosJava';
import { LogosGitIcon } from './Icons/LogosGitIcon';
import { LogosGithub } from './Icons/LogosGithub';
import { LogosVisualStudioCode } from './Icons/LogosVisualStudioCode';
import { LogosDjangoIcon } from './Icons/LogosDjangoIcon';

export default function Technologies() {
    return (
        <div style={{
            display: 'left',
            padding: '20px',
            paddingTop: '80px',
            fontSize: '20px',
            flexDirection: 'row',
            color: '#f2f2f2',
            paddingLeft: '180px',
        }}>
            <div>
                <h2 style={{ maxWidth: '600px' }}>Tecnologias</h2>
                <p style={{ paddingTop: '20px' }}>Tecnologias que tenho conhecimento ou já tive algum contato</p>
            </div>

            <div style={{
                display: 'flex',
                gap: '90px',
                flexDirection: 'row',
                flexWrap: 'wrap',
                padding: '60px',
                maxWidth: '1000px',
            }}>
                <div style={{ paddingBottom: '40px', paddingTop: '10px' }}>
                    <LogosHtml5 />
                </div>

                <div style={{ paddingBottom: '40px', paddingTop: '10px' }}>
                    <LogosCss3 />
                </div>

                <div style={{ paddingBottom: '40px', paddingTop: '10px' }}>
                    <LogosJavascript />
                </div>

                <div style={{ paddingBottom: '40px', paddingTop: '10px' }}>
                    <LogosReact />
                </div>
            
                <div style={{ paddingBottom: '40px', paddingTop: '10px' }}>
                    <LogosBootstrap />
                </div>

                <div style={{ paddingBottom: '40px', paddingTop: '10px' }}>
                    <LogosPython />
                </div>

                <div style={{ paddingBottom: '40px', paddingTop: '10px' }}>
                    <LogosMysqlIcon />
                </div>

                <div style={{ paddingBottom: '40px', paddingTop: '10px' }}>
                    <LogosJava />
                </div>

                <div style={{ paddingBottom: '40px', paddingTop: '10px' }}>
                    <LogosGitIcon />
                </div>

                <div style={{ paddingBottom: '40px', paddingTop: '10px' }}>
                    <LogosGithub />
                </div>

                <div style={{ paddingBottom: '40px', paddingTop: '10px' }}>
                    <LogosVisualStudioCode />
                </div>

                <div style={{ paddingBottom: '40px', paddingTop: '10px' }}>
                    <LogosDjangoIcon />
                </div>
            </div>
        </div>
    );
}
