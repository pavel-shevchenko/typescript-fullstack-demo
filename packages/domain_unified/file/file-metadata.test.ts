import { describe, expect, test } from 'bun:test';
import { selectFileMetadataFields } from './file-metadata';

const hero = {
  fieldName: 'heroFiles',
  originalName: 'hero.webp',
  objectName: 'domain-unified/cmsArticle/1/heroFiles/object',
  mimetype: 'image/webp',
  size: 123,
};

describe('selectFileMetadataFields', () => {
  test('returns only whitelisted metadata and requested indices', () => {
    const result = selectFileMetadataFields(
      { heroFiles: [hero, { ...hero, objectName: 'second' }], privateFiles: [hero] },
      [
        { fieldName: 'heroFiles', fileIndices: [1] },
        { fieldName: 'privateFiles' },
      ],
      ['heroFiles'],
    );

    expect(result).toEqual({
      heroFiles: [{ ...hero, objectName: 'second' }],
    });
  });
});
