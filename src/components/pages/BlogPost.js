import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getBlogPosts } from '../../utils/blogUtils';

const BlogPostContainer = styled.div`
  padding-top: 80px;
  min-height: 100vh;
`;

const BlogPostContent = styled.article`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  padding-top: 3rem;
`;

const BlogHeroImage = styled.div`
  width: 100%;
  height: 400px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  margin-bottom: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

const BlogTitle = styled.h1`
  color: ${props => props.theme.colors.primary};
  font-family: ${props => props.theme.fonts.secondary};
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const BlogMeta = styled.div`
  color: ${props => props.theme.colors.lightText};
  margin-bottom: 2rem;
  font-size: 0.9rem;
`;

const BlogText = styled.div`
  color: ${props => props.theme.colors.text};
  line-height: 1.8;
  font-size: 1.1rem;
  
  p {
    margin-bottom: 1.5rem;
  }
`;

const BackButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.colors.accent};
  cursor: pointer;
  font-size: 1rem;
  padding: 1rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    color: ${props => props.theme.colors.accentDark};
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
`;

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPost = async () => {
      try {
        const posts = await getBlogPosts();
        const foundPost = posts.find(p => p.id === id);
        setPost(foundPost);
      } catch (error) {
        console.error('Blog yazısı yüklenirken hata:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPost();
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) {
    return (
      <BlogPostContainer>
        <LoadingContainer>
          <span>Yükleniyor...</span>
        </LoadingContainer>
      </BlogPostContainer>
    );
  }

  if (!post) {
    return (
      <BlogPostContainer>
        <BlogPostContent>
          <BackButton onClick={() => navigate('/blog')}>← Blog'a Dön</BackButton>
          <BlogTitle>Yazı bulunamadı</BlogTitle>
        </BlogPostContent>
      </BlogPostContainer>
    );
  }

  return (
    <BlogPostContainer>
      <BlogPostContent>
        <BackButton onClick={() => navigate('/blog')}>← Blog'a Dön</BackButton>
        <BlogHeroImage image={post.image} />
        <BlogTitle>{post.title}</BlogTitle>
        <BlogMeta>{post.date} • {post.readTime}</BlogMeta>
        <BlogText>
          {post.content.split('\n').map((paragraph, index) => (
            <p key={index}>{paragraph.trim()}</p>
          ))}
        </BlogText>
      </BlogPostContent>
    </BlogPostContainer>
  );
};

export default BlogPost;