import clsx from 'clsx';
import React from 'react';
import sectionStyles from '@site/src/css/section.module.scss';
import contentStyles from '@site/src/css/content.module.scss';

export default () => (
	<section
		className={clsx(sectionStyles.section, sectionStyles.section)}
	>
		<div className={sectionStyles['section--inner']}>
			<div className={clsx(contentStyles.content__col2m, contentStyles.content__text)}>
				<div>
					<h3>TODO</h3>
					<ul>
						<li>TODO</li>
					</ul>
				</div>
				<div>
					<h3>TODO</h3>
				</div>
			</div>
		</div>
	</section>
);
