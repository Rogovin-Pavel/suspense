import { db } from './../../src/firebase';

export const getAbout = () => db.collection('about').get();
