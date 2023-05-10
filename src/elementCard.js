import React from 'react';
import Link from 'next/link'; //1 dont forget to install
import { useRouter } from 'next/router';
import { Elements } from './PubChemElements';
import './App.css';

// To enable shallow routing, set the shallow option to true: EXAMPLE
//3 // Current URL is '/'
const Page = () => {
    const router = useRouter();
   
    useEffect(() => {
      // Always do navigations after the first render
      router.push('/?counter=10', undefined, { shallow: true });
    }, []);
   
    useEffect(() => {
      // The counter changed!
    }, [router.query.counter]);
  }
   



const elements = [...Elements];

const Cards = ({ elements }) => {
    return (
      <ul>
        {elements.map((element) => (
          <li key={element.id}>
            <Link href={`/blog/${encodeURIComponent(element.slug)}`}>
              {element.title}
            </Link>
          </li>
        ))}
      </ul>
    );
  }
   

export default {Page, Cards};