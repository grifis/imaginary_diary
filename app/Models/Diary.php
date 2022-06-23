<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Diary extends Model
{
    use HasFactory;
    
    //date型の表示形式変換
    protected $dates = [
        'date',
    ];
    
    protected $fillable = [
        'user_id', 'title', 'body', 'image', 'audio', 'year', 'date',
    ];
    
    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }
}
