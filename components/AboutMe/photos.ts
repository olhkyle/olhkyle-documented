import grad01 from '@/public/about/student/grad-1.jpeg';
import grad02 from '@/public/about/student/grad-2.jpeg';
import grad03 from '@/public/about/student/grad-3.jpeg';
import grad04 from '@/public/about/student/grad-4.jpeg';
import cohousingiso from '@/public/about/student/cohousing-iso.png';
import graduationthumbnail from '@/public/about/student/graduation-project.jpeg';
import shop from '@/public/about/work/shop.jpeg';
import furnitures from '@/public/about/work/furniture-design.jpeg';
import grandma from '@/public/about/work/grandma.png';
import bath from '@/public/about/work/bath.png';
import cafe from '@/public/about/work/cafe.jpeg';
import house from '@/public/about/work/house.jpeg';

import { StaticImageData } from 'next/image';

const studentPhotos: Array<StaticImageData> = [grad01, grad02, grad03, grad04, cohousingiso, graduationthumbnail];

const workPhotos: Array<StaticImageData> = [shop, furnitures, cafe, bath, grandma, house];

const BLUR_DATA_URL =
	'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8cAYAArIBvs7xUBkAAAAASUVORK5CYII=';

export { studentPhotos, workPhotos, BLUR_DATA_URL };
