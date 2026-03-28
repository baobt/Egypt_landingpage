import { useState } from 'react';
import SectionHeading from '../common/SectionHeading';

function MediaGallerySection({ content }) {
  const [expanded, setExpanded] = useState({ products: false, factory: false });

  const groups = [
    {
      key: 'products',
      title: content.groups.products.title,
      description: content.groups.products.description,
      images: content.productItems,
      altPrefix: content.groups.products.altPrefix,
    },
    {
      key: 'factory',
      title: content.groups.factory.title,
      description: content.groups.factory.description,
      images: content.factoryItems,
      altPrefix: content.groups.factory.altPrefix,
    },
  ];

  const toggleGroup = (key) => {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section id={content.sectionId} className="section media-gallery">
      <div className="container">
        <SectionHeading title={content.headingTitle} subtitle={content.headingSubtitle} />

        <div className="media-gallery__groups">
          {groups.map((group) => {
            const isExpanded = expanded[group.key];
            const visibleItems = isExpanded ? group.images : group.images.slice(0, content.initialVisible);

            return (
              <article className="media-gallery__group" key={group.key}>
                <header className="media-gallery__header">
                  <h3>{group.title}</h3>
                  {group.description ? <p>{group.description}</p> : null}
                </header>

                <div className="media-gallery__grid">
                  {visibleItems.map((image, index) => (
                    <figure className="media-gallery__item" key={`${group.key}-${image}`}>
                      <img
                        src={image}
                        alt={`${group.altPrefix} ${index + 1}`}
                        loading="lazy"
                        decoding="async"
                      />
                    </figure>
                  ))}
                </div>

                {group.images.length > content.initialVisible ? (
                  <button className="btn-ghost media-gallery__toggle" type="button" onClick={() => toggleGroup(group.key)}>
                    {isExpanded ? content.showLess : content.showMore}
                  </button>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default MediaGallerySection;