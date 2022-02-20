import type { User } from "@types";

import DefaultProfilePhotoURL from "@/assets/images/default-profile-picture.png";

export interface UserCardProps {
  user: User;
}

function handleImageError(e: React.SyntheticEvent<HTMLImageElement>): void {
  e.currentTarget.src = DefaultProfilePhotoURL;
}

export default function UserCard({ user }: UserCardProps): React.ReactElement {
  return (
    <div key={user.id} className="flex space-x-4">
      <img
        loading="lazy"
        className="w-20 h-20 object-contain"
        src={user.image}
        alt="Profile Photo"
        onError={handleImageError}
      />

      <div className="flex flex-col space-y-1">
        <span title="User name">{user.name}</span>
        <span title="User company">{user.company}</span>
        <span title="User Job">{user.job}</span>
      </div>
    </div>
  );
}
