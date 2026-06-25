import { describe, it, expect } from 'vitest';
import { articles, getArticleBySlug } from '@/data/articles';

describe('articles data', () => {
  it('legalább 3 cikket tartalmaz, egyedi slugokkal', () => {
    expect(articles.length).toBeGreaterThanOrEqual(3);
    const slugs = articles.map((a) => a.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('minden cikknek van kétnyelvű címe és kivonata', () => {
    for (const a of articles) {
      expect(a.title.hu.length).toBeGreaterThan(0);
      expect(a.title.en.length).toBeGreaterThan(0);
      expect(a.excerpt.hu.length).toBeGreaterThan(0);
      expect(a.excerpt.en.length).toBeGreaterThan(0);
      expect(a.body.length).toBeGreaterThan(0);
    }
  });

  it('getArticleBySlug megtalálja a létező cikket', () => {
    const first = articles[0];
    expect(getArticleBySlug(first.slug)?.slug).toBe(first.slug);
  });

  it('getArticleBySlug undefined-ot ad ismeretlen slugra', () => {
    expect(getArticleBySlug('nem-letezik')).toBeUndefined();
    expect(getArticleBySlug(undefined)).toBeUndefined();
  });
});
