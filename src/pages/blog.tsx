import React from 'react'
import Link from 'next/link'
import Layout from '@/components/Layout'
import { Container } from '@/components/Layout/Container'

export default function App() {
  return (
    <Layout Nav={<BlogFixedNav />} Foot={<Footer />}>
      <Container>
        <Header />
        <LatestBlog />
        <Navigation />
        <MostReadBlogs />
      </Container>
    </Layout>
  )
}

// BlogFixedNav
const BlogFixedNav: React.FC = () => {
  return (
    <header className="h-12 w-[92%] mx-auto font-semibold flex items-center justify-between">
      <div className="text-2xl leading-6">IBTC</div>
      <ul className="flex space-x-4 text-base list-none gap-14">
        {['Home', 'About Us', 'Blog', 'Help', 'Sign in'].map((text, index) => {
          return (
            <Link
              href="#"
              className={`${
                index == 0 &&
                'text-ibtc-blog-blue border-b-2 border-ibtc-blog-blue'
              } py-2`}
            >
              {text}
            </Link>
          )
        })}
      </ul>
    </header>
  )
}

// Header
const Header = () => {
  return (
    <h1 className="font-semibold text-6xl leading-[5.1rem] mt-10">
      THE <span className="text-ibtc-blog-blue">IBTC</span> BLOG
    </h1>
  )
}

// LatestBlog
const LatestBlog: React.FC = () => {
  return (
    <div className="flex p-4 font-semibold gap-2">
      <img
        src="https://res.cloudinary.com/dfliypjzt/image/upload/q_50,f_auto,fl_lossy,w_auto,c_scale/v1686718456/a_speaker_at_the_ibadan_techies_kff5so"
        alt="Latest Blog"
        className="w-[540px] h-88"
      />
      <div className="w-1/2 p-4 text-ibtc-black">
        <p className="text-base">March 08, 2023</p>
        <p className="text-4.5xl font-semibold mt-6.5 pt-1">
          How Ade made his first money ($2,400) from Technical writing
        </p>
        <a href="#" className="text-ibtc-grey-light mt-2.5">
          Read more...
        </a>
      </div>
    </div>
  )
}

// Navigation
const Navigation: React.FC = () => {
  return (
    <nav className="py-10 font-semibold">
      <p className="text-3.2xl mb-10">Blog Category</p>
      <ul className="flex gap-18 text-2xl leading-6">
        {['Design', 'Engineering', 'Web3', 'Cloud', 'AI'].map((text, index) => {
          return (
            <Link
              href="#"
              className={`${
                index == 0 && 'text-white rounded-3xl bg-ibtc-blog-blue'
              } py-4 px-4`}
            >
              {text}
            </Link>
          )
        })}
      </ul>
    </nav>
  )
}

// MostReadBlogs
interface Blog {
  image: string
  date: string
  title: string
  excerpt: string
}

const MostReadBlogs: React.FC = () => {
  const blogs: Blog[] = [
    {
      image:
        'https://res.cloudinary.com/dfliypjzt/image/upload/q_50,f_auto,fl_lossy,w_auto,c_scale/v1686718456/a_speaker_at_the_ibadan_techies_kff5so',
      date: 'August 6, 2023',
      title: 'The psychology of money and how it helped my financial life.',
      excerpt: 'Lorem ipsum dolor sit amet...',
    },
    {
      image:
        'https://res.cloudinary.com/dfliypjzt/image/upload/q_50,f_auto,fl_lossy,w_auto,c_scale/v1686718456/a_speaker_at_the_ibadan_techies_kff5so',
      date: 'August 60, 2023',
      title: 'What developers need to know about JWTs - a talk by Dan moore ',
      excerpt: 'Lorem ipsum dolor sit amet...',
    },
    {
      image:
        'https://res.cloudinary.com/dfliypjzt/image/upload/q_50,f_auto,fl_lossy,w_auto,c_scale/v1686718456/a_speaker_at_the_ibadan_techies_kff5so',
      date: 'Maya 6, 2023',
      title: 'How Nwoke’s talk on being a black woman in tech changed me.',
      excerpt: 'Lorem ipsum dolor sit amet...',
    },
    {
      image:
        'https://res.cloudinary.com/dfliypjzt/image/upload/q_50,f_auto,fl_lossy,w_auto,c_scale/v1686718456/a_speaker_at_the_ibadan_techies_kff5so',
      date: 'Bieren 6, 2023',
      title: 'The IBTC club - things to expect as a newbie joining the club.',
      excerpt: 'Lorem ipsum dolor sit amet...',
    },
    // Add more blog objects here
  ]

  return (
    <div className="">
      <h2 className="text-xl font-semibold mb-4">Most Read Blogs</h2>
      <div className="flex flex-wrap gap-y-20 justify-between">
        {blogs.map((blog, index) => (
          <div key={index} className="w-[46%]">
            <div className="">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-[311px] object-cover mb-2"
              />
              <p className="mb-3.5 text-sm">{blog.date}</p>
              <h3 className="text-lg w-5/6 py-1 font-semibold">{blog.title}</h3>
              <p className="text-base">
                Read more on sjnsldbkvhugdfuosg yduaghsvyuvhizgvu bhdegyug
                dfufjvk oghvy ugvbdfyuvjcx jkbkjshJfdkbjkb uhjnkgjfjbnlk
                kjhnklgm,fjknll kljn lnjk jngkkdnfklfmg, aksmffnvm,nha
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Footer
const Footer: React.FC = () => {
  return (
    <>
      <aside className="font-semibold text-6xl leading-[5.1rem] py-10  pl-8 bg-ibtc-blog-blue text-white">
        Advertise with us
      </aside>
      <nav className="py-10 font-normal">
        <ul className="flex justify-center gap-18 text-base">
          {['About', 'Help', 'FAQ', 'Terms', 'Privacy'].map((text, index) => {
            return (
              <Link href="#" className={`p-2 text-ibtc-blue`}>
                {text}
              </Link>
            )
          })}
          <Link href="#" className="p-2 text-ibtc-black">
            &copy; 2003
          </Link>
        </ul>
      </nav>
    </>
  )
}
