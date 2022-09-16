<?php

namespace App\Http\Resources;

use App\Enums\UserStatusesEnum;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'role_id' => $this->when($this->relationLoaded('role'), function () {
                return  $this->role?->name;
            }),
            'status' => UserStatusesEnum::from($this->status)->name
        ];
    }
}
