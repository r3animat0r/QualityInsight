import './Home.css';
import React from 'react';
import Textfield from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import SearchBar from '../components/SearchBar';

export default function Home() {
    return (
        <div id="home">
            <Textfield className="searchBar" placeholder="Search for an article on en.wikipedia.org" variant="outlined" size="small" />
            <div id="qi-info" className="card">
                <Card variant="outlined">
                    <CardContent>
                        Hallo
                    </CardContent>
                </Card>
            </div>
            <div className="flex-container">
                <div id="ores-info" className="card">
                    <Card variant="outlined">
                        <CardContent>
                            Hallo
                        </CardContent>
                    </Card>
                </div>
                <div id="aq-info" className="card">
                    <Card variant="outlined">
                        <CardContent>
                            Hallo
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}