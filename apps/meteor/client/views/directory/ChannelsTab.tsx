import React, { ReactElement } from 'react';

import { usePermission } from '../../contexts/AuthorizationContext';
import NotAuthorizedPage from '../notAuthorized/NotAuthorizedPage';
import ChannelsTable from './ChannelsTable';

function ChannelsTab(): ReactElement {
	const canViewPublicRooms = usePermission('view-c-room');

	if (canViewPublicRooms) {
		return <ChannelsTable />;
	}

	return <NotAuthorizedPage />;
}

export default ChannelsTab;
