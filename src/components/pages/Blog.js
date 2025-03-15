import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { getBlogPosts } from '../../utils/blogUtils';

const BlogContainer = styled.div`
  padding-top: 100px;
`;

const HeroSection = styled.section`
  padding: 3rem 0;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.lightCream};
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  font-family: ${props => props.theme.fonts.secondary};
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 2.5rem;
  }
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const BlogCard = styled.article`
  background: ${props => props.theme.colors.lightCream};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform ${props => props.theme.transitions.medium};

  &:hover {
    transform: translateY(-5px);
  }
`;

const BlogImage = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30%;
    background: linear-gradient(to top, rgba(0,0,0,0.5), transparent);
  }
`;

const BlogContent = styled.div`
  padding: 1.5rem;
`;

const BlogTitle = styled.h2`
  color: ${props => props.theme.colors.primary};
  font-family: ${props => props.theme.fonts.secondary};
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const BlogExcerpt = styled.p`
  color: ${props => props.theme.colors.text};
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const BlogMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${props => props.theme.colors.lightText};
  font-size: 0.9rem;
`;

const ReadMore = styled(Link)`
  color: ${props => props.theme.colors.accent};
  text-decoration: none;
  font-weight: 500;
  transition: color ${props => props.theme.transitions.fast};

  &:hover {
    color: ${props => props.theme.colors.accentDark};
  }
`;

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const blogPosts = await getBlogPosts();
        setPosts(blogPosts);
      } catch (error) {
        console.error('Blog yazıları yüklenirken hata:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  if (loading) {
    return (
      <BlogContainer>
        <HeroSection>
          <div className="container">
            <HeroTitle>Blog</HeroTitle>
          </div>
        </HeroSection>
        <div style={{ textAlign: 'center', padding: '2rem' }}>Yükleniyor...</div>
      </BlogContainer>
    );
  }

  return (
    <BlogContainer>
      <HeroSection>
        <div className="container">
          <HeroTitle>Blog</HeroTitle>
        </div>
      </HeroSection>
      
      <BlogGrid>
        {posts.map(post => (
          <BlogCard key={post.id}>
            <BlogImage image={post.image} />
            <BlogContent>
              <BlogTitle>{post.title}</BlogTitle>
              <BlogExcerpt>
                {post.content.split('\n')[0].substring(0, 150)}...
              </BlogExcerpt>
              <BlogMeta>
                <span>{post.date} • {post.readTime}</span>
                <ReadMore to={`/blog/${post.id}`}>Devamını Oku →</ReadMore>
              </BlogMeta>
            </BlogContent>
          </BlogCard>
        ))}
      </BlogGrid>
    </BlogContainer>
  );
};

export default Blog;